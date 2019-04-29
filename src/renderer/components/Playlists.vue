<template>
  <div class="playlists-page">
    <nav-bar></nav-bar>
    <div class="playlists-wrapper">
      <div class="columns">
        <!-- <div class="column is-narrow playlists-bar-wrapper">
          <div class="playlists-bar">
            <a class="playlist-link" id='create-playlist'>+ New Playlist</a>
            <a class="playlist-link is-selected">Playlist 1</a>
            <a class="playlist-link">Playlist 2</a>
            <a class="playlist-link">Playlist 3</a>
            <a class="playlist-link">Playlist 4</a>
            <a class="playlist-link">Playlist 5</a>
          </div>
        </div> -->
        <div class="column">
          <section class="accordions">
            <article class="accordion is-active">
              <div class="accordion-header toggle">
                <p>Playlist 1</p>
              </div>
              <div class="accordion-body">
                <div class="accordion-content">
                  <div class="columns">
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Super Mario Bros.</h2>
                      </div>
                    </div>
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Super Mario Bros. 2</h2>
                        <!-- <a class="button is-small is-dark" @click="getContent()">Load Content</a> -->
                      </div>
                    </div>
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Super Mario Bros. 3</h2>
                      </div>
                    </div>
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Super Mario World</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="accordion">
              <div class="accordion-header toggle">
                <p>Playlist 2</p>
              </div>
              <div class="accordion-body">
                <div class="accordion-content">
                  <div class="columns">
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">SimCity</h2>
                      </div>
                    </div>
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Super Metroid</h2>
                      </div>
                    </div>
                    <div class="column">
                      <div class="game-card">
                        <img src="#">
                        <h2 class="game-title">Star Fox</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import SideBar from './SideBar'
  import bulmaAccordion from 'bulma-accordion/dist/js/bulma-accordion.min.js'
  const axios = require('axios')

  export default {
    name: 'playlists',
    components: { NavBar, SideBar },
    mounted: function () {
      let accordions = bulmaAccordion.attach() // eslint-disable-line
      let els = document.querySelectorAll('.game-card .game-title')
      for (let el of els) {
        let matches = []
        console.log('looking for matches of: ' + el.innerText)
        this.$http.get('https://api.thegamesdb.net/Games/ByGameName?apikey=999d0bbc99aef99152169563a1b38b4de54c1ec486a2d705310b1708b3aca831&name=' + el.innerText)
          .then(function (response) {
            // handle success
            console.log(response)
            for (let game of response.data.data.games) {
              if (game.game_title === el.innerText) {
                console.log(game.game_title)
                matches.push(game.id)
              }
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        setTimeout(function () {
          axios.get('https://api.thegamesdb.net/Games/Images?apikey=999d0bbc99aef99152169563a1b38b4de54c1ec486a2d705310b1708b3aca831&games_id=' + matches[0] + '&filter%5Btype%5D=boxart')
            .then(function (response) {
              console.log(response)
              let imgUrl = response.data.data.base_url.original + response.data.data.images[matches[0]]['0'].filename
              // console.log(response.data.data.base_url.original + response.data.data.images[matches[0]]['0'].filename)
              el.previousElementSibling.src = imgUrl
            })
            .catch(function (error) {
              console.log(error)
            })
        }, 2000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .playlists-page {
    padding-top: 1.5em;
    height: 100%;
    background-color: $color-dark-gray;

    .columns {
      margin-right: 0;
    }

    .playlists-wrapper {
      .columns {
        margin-left: 0;
      }

      h1 {
        text-transform: uppercase;
        font-family: $font-body;
      }

      .playlists-bar-wrapper {
        background-color: $color-light-gray;

        .playlists-bar {
          padding: 1em 0.5em;

          .playlist-link {
            display: block;
            color: #acacac;
            font-family: $font-body;
            font-weight: 300;
            font-size: 1.75em;

            &:hover {
              color: white;
            }

            &.is-selected {
              color: white;
              font-weight: 400;
            }
          }
        }
      }

      .accordions {
        .accordion {
          background-color: transparent;
          font-family: $font-body;

          .accordion-body {
            border-radius: 0;
            border: none;
            color: white;

            .accordion-content {
              border-radius: 0;

              .game-card {
                padding-bottom: 0.5em;
                margin: 1em 0;
                background-color: $color-light-gray;
                border-radius: 4px;
                text-align: center;

                a {
                  margin-top: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
