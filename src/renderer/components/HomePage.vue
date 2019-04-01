<template>
  <div id="home-page">
    <!-- <intro-modal></intro-modal> -->
    <nav-bar></nav-bar>
    <div class="home-wrapper">
      <!-- <div class="section">
        <h1>Welcome</h1>
      </div> -->
      <div class="columns">
        <div class="column is-narrow console-bar-wrapper">
          <div class="console-bar">
            <a class="console-link" id='NES' @click="setActive()"><router-link to="/home"><img src="static/images/NES.png" alt="NES"></router-link></a>
            <a class="console-link" id='SNES' @click="setActive()"><router-link to="/home"><img src="static/images/SNES.png" alt="SNES"></router-link></a>
            <a class="console-link" id='GB' @click="setActive()"><router-link to="/home"><img src="static/images/GB.png" alt="GB"></router-link></a>
            <a class="console-link" id='gen' @click="setActive()"><router-link to="/home"><img src="static/images/Genesis.png" alt="Genesis"></router-link></a>
            <a class="console-link" id='at2600' @click="setActive()"><router-link to="/home"><img src="static/images/Atari2600.png" alt="Atari 2600"></router-link></a>
            <a class="console-link" id='at5200' @click="setActive()"><router-link to="/home"><img src="static/images/Atari5200.png" alt="Atari 5200"></router-link></a>
            <a class="console-link" id='at7800' @click="setActive()"><router-link to="/home"><img src="static/images/Atari7800.png" alt="Atari 7800"></router-link></a>
            <a class="console-link" id='fcds' @click="setActive()"><router-link to="/home"><img src="static/images/FamicomDisk.png" alt="Famicom Disk System"></router-link></a>
            <a class="console-link" id='gg' @click="setActive()"><router-link to="/home"><img src="static/images/GameGear.png" alt="Sega Game Gear"></router-link></a>
            <a class="console-link" id='n64' @click="setActive()"><router-link to="/home"><img src="static/images/N64.png" alt="Nintendo 64"></router-link></a>
            <a class="console-link" id='ng' @click="setActive()"><router-link to="/home"><img src="static/images/NEOGEO.png" alt="Neo Geo Pocket"></router-link></a>
          </div>
        </div>
        <div class="column results-view-wrapper">
          <div class="section results-view">
            <!-- <h1 class="results-title">{{ system }}</h1> -->
            <h1 class="results-title">All Systems</h1>
            <hr>
            <div class="section">
              <div class="columns">
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros.</h2>
                    <a class="button is-small is-dark" @click="getContent()">Load Content</a>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros. 2</h2>
                    <a class="button is-small is-dark" @click="getContent()">Load Content</a>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros. 3</h2>
                    <a class="button is-small is-dark" @click="getContent()">Load Content</a>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario World</h2>
                    <a class="button is-small is-dark" @click="getContent()">Load Content</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import SideBar from './SideBar'
  import IntroModal from './IntroModal'

  const axios = require('axios')

  export default {
    name: 'home',
    components: { NavBar, SideBar, IntroModal },
    computed: {
      system () {
        return this.$store.state.Systems.currentSystem
      }
    },
    methods: {
      setActive () {
        let el = event.currentTarget
        let selected = document.getElementsByClassName('is-selected')[0]
        let title = document.getElementsByClassName('results-title')[0]
        if (!el.classList.contains('is-selected')) {
          if (selected !== undefined) selected.classList.remove('is-selected')
          el.classList.add('is-selected')
          title.innerText = el.id
          console.log(el.id)
          this.$store.dispatch('setSystem', 1)
          console.log(this.$store.state.Systems.currentSystem)
        } else if (el.classList.contains('is-selected')) {
          el.classList.remove('is-selected')
          title.innerText = 'All Systems'
        }
      },
      getContent () {
        let el = event.currentTarget.previousElementSibling
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
            // handle error
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
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  .home-wrapper {
    color: white;

    .console-bar-wrapper {
      background-color: $color-light-gray;
      padding-right: 0;
      padding-top: 1.5em;
      padding-bottom: 10em;
    }
  }

  .columns {
    margin-left: 0;
  }

  .console-bar {
    padding: 1em 0.5em;

    .console-link {
      display: block;
      img {
        width: 4em;
      }

      &.is-selected {
        img {
          box-shadow: 0 0 5px white;
          border-radius: 8px;
        }
      }
    }
  }

  .results-view-wrapper {
    background-color: $color-dark-gray;

    .results-view {
      .results-title {
        text-transform: uppercase;
        font-family: $font-body;
        font-weight: 300;
        font-size: 2em;
        text-align: center;
      }

      hr {
        margin: 0rem 4rem;
      }

      .game-card {
        padding: 1em 1em;
        background-color: $color-light-gray;
        border-radius: 2px;
        text-align: center;

        a {
          margin-top: 10px;
        }
      }
    }
  }
</style>
