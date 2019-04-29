<template>
  <div id="home-page">
    <!-- <intro-modal></intro-modal> -->
    <!-- <add-modal></add-modal> -->
    <nav-bar></nav-bar>
    <div class="home-wrapper">
      <!-- <div class="section">
        <h1>Welcome</h1>
      </div> -->
      <div class="columns">
        <div class="column is-narrow console-bar-wrapper">
          <div class="console-bar">
            <a class="console-link" id='NES' title="Nintendo Entertainment System" @click="setActive()"><router-link to="/home"><img src="static/images/NES.png" alt="NES"></router-link></a>
            <a class="console-link" id='SNES' title="Super Nintendo Entertainment System" @click="setActive()"><router-link to="/home"><img src="static/images/SNES.png" alt="SNES"></router-link></a>
            <a class="console-link" id='GB' title="Nintendo Game Boy" @click="setActive()"><router-link to="/home"><img src="static/images/GB.png" alt="GB"></router-link></a>
            <a class="console-link" id='GBC' title="Nintendo Game Boy Color" @click="setActive()"><router-link to="/home"><img src="static/images/GBC.png" alt="GBC"></router-link></a>
            <a class="console-link" id='GBA' title="Nintendo Game Boy Advance" @click="setActive()"><router-link to="/home"><img src="static/images/GBA.png" alt="GBA"></router-link></a>
            <a class="console-link" id='gen' title="Sega Genesis | Sega Mega Drive" @click="setActive()"><router-link to="/home"><img src="static/images/Genesis.png" alt="Genesis"></router-link></a>
            <a class="console-link" id='32x' title="Sega 32X" @click="setActive()"><router-link to="/home"><img src="static/images/32x.png" alt="32x"></router-link></a>
            <a class="console-link" id='segacd' title="Sega CD" @click="setActive()"><router-link to="/home"><img src="static/images/SegaCD.png" alt="Sega CD"></router-link></a>
            <a class="console-link" id='at2600' title="Atari 2600" @click="setActive()"><router-link to="/home"><img src="static/images/Atari2600.png" alt="Atari 2600"></router-link></a>
            <a class="console-link" id='at5200' title="Atari 5200" @click="setActive()"><router-link to="/home"><img src="static/images/Atari5200.png" alt="Atari 5200"></router-link></a>
            <a class="console-link" id='at7800' title="Atari 7800" @click="setActive()"><router-link to="/home"><img src="static/images/Atari7800.png" alt="Atari 7800"></router-link></a>
            <a class="console-link" id='fcds' title="Famicom Disk System" @click="setActive()"><router-link to="/home"><img src="static/images/FamicomDisk.png" alt="Famicom Disk System"></router-link></a>
            <a class="console-link" id='gg' title="Sega Game Gear" @click="setActive()"><router-link to="/home"><img src="static/images/GameGear.png" alt="Sega Game Gear"></router-link></a>
            <a class="console-link" id='n64' title="Nintendo 64" @click="setActive()"><router-link to="/home"><img src="static/images/N64.png" alt="Nintendo 64"></router-link></a>
            <a class="console-link" id='ng' title="Neo Geo Pocket" @click="setActive()"><router-link to="/home"><img src="static/images/NEOGEO.png" alt="Neo Geo Pocket"></router-link></a>
          </div>
          <span class="console-bar-toggle" @click="toggleConsoleBar()"></span>
        </div>
        <div class="column results-view-wrapper">
          <div class="section results-view">
            <!-- <h1 class="results-title">{{ system }}</h1> -->
            <h1 class="results-title">All Systems</h1>
            <hr>
            <div class="section results-section">
              <!-- <div class="tile is-ancestor">
                <div class="tile is-parent">
                  <article class="tile is-child box">One</article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">Two</article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">Three</article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">Four</article>
                </div>
              </div> -->
              <div class="columns">
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros.</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">SimCity</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">River City Ransom</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Final Fight Guy</h2>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros. 2</h2>
                    <!-- <a class="button is-small is-dark" @click="getContent()">Load Content</a> -->
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">The Legend of Zelda</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">NBA Jam</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Tetris Attack</h2>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario Bros. 3</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Milon's Secret Castle</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Sonic CD</h2>
                  </div>
                </div>
                <div class="column">
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Super Mario World</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Bomberman</h2>
                  </div>
                  <div class="game-card">
                    <img src="#">
                    <h2 class="game-title">Mega Man: The Wily Wars</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="add-title-tip"><span>Add Title</span></div>
            <div class="add-title-button" @click="showAddModal()" @mouseover="showTooltip()" @mouseout="hideTooltip()"><span>+</span></div>
            <div class="add-title-cover"></div>
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
  import AddModal from './AddModal'

  const axios = require('axios')
  const { dialog } = require('electron').remote

  export default {
    name: 'home',
    components: { NavBar, SideBar, IntroModal, AddModal },
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
          title.innerText = el.title
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
      },
      toggleConsoleBar () {
        let el = document.querySelector('.console-bar-wrapper')
        el.classList.toggle('is-bar-hidden')
      },
      showTooltip () {
        let el = document.querySelector('.add-title-tip')
        el.classList.add('is-tip-active')
      },
      hideTooltip () {
        let el = document.querySelector('.add-title-tip')
        el.classList.remove('is-tip-active')
      },
      showAddModal () {
        console.log('showing add modal')
        console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
      },
      switchPlatform (id) {
        let els = document.querySelectorAll('.game-card .game-title')
        for (let el of els) {
          console.log('checking if ' + el.innerText + ' matches current platform ' + id)
          this.$http.get('https://api.thegamesdb.net/Games/ByGameName?apikey=999d0bbc99aef99152169563a1b38b4de54c1ec486a2d705310b1708b3aca831&name=' + el.innerText)
            .then(function (response) {
              // handle success
              console.log(response)
              for (let game of response.data.data.games) {
                if (game.game_title === el.innerText) {
                  console.log(game.game_title)
                  if (game.platform === id) {
                    console.log('matches')
                    el.parentElement.style.display = 'none'
                  }
                }
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        this.setActive()
      }
    },
    mounted: function () {
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
    },
    beforeUpdate: function () {
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

<style lang="scss">
  .home-wrapper {
    color: white;
    font-family: $font-body;

    .console-bar-wrapper {
      position: relative;
      background-color: $color-light-gray;
      padding-right: 0;
      padding-top: 1.5em;
      padding-bottom: 10em;
      transition: margin-left 0.5s ease;

      &.is-bar-hidden {
        margin-left: -5em;

        .console-bar-toggle {
          margin-left: -5em;
        }
      }

      .console-bar-toggle {
        width: 20px;
        height: 30px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: $color-light-gray;
        position: fixed;
        left: 5em;
        top: 45vh;
        padding-top: 0.25em;
        cursor: pointer;
        transition: margin-left 0.5s ease;

        &:before {
          content: "\003E";
          padding-top: 0.2em;
          color: lighten($color-light-gray, 30%);
          margin-left: 2px;
          font-weight: 100;
        }
      }
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
      // position: relative;

      .results-title {
        text-transform: uppercase;
        font-family: $font-body;
        font-weight: 300;
        font-size: 2em;
        text-align: center;
      }

      .results-section {
        padding-top: 1em;
      }

      hr {
        margin: 0rem 4rem;
      }

      .game-card {
        padding-bottom: 0.5em;
        margin: 1em 0;
        background-color: $color-light-gray;
        border-radius: 4px;
        text-align: center;
        transition: all 0.5s;

        &:hover {
          box-shadow: 0 0 20px #121212;
          cursor: pointer;
          transform: scale(1.05);
        }

        a {
          margin-top: 10px;
        }
      }

      .add-title-cover {
        position: fixed;
        bottom: 1em;
        right: -1em;
        width: 50px;
        height: 50px;
        background-color: $color-dark-gray;
        z-index: 0;
        //
        display: none;
      }

      .add-title-tip {
        position: fixed;
        bottom: 0.45em;
        right: 3.15em;
        width: 100px;
        height: 50px;
        padding: 4px;
        margin-right: -6em;
        transition: all 0.5s ease;
        //
        display: none;

        &.is-tip-active {
          margin-right: -0.5em;
        }

        span {
          background-color: $color-light-gray;
          padding: 4px 8px;
          box-shadow: 0 0 2px #111;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }

      .add-title-button {
        position: fixed;
        bottom: 1em;
        right: 1em;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background-color: $color-light-gray;
        display: flex;
        justify-content: center;
        cursor: pointer;
        z-index: 2;
        //
        display: none;

        span {
          font-weight: 100;
          font-size: 2em;
        }

        &:hover {
          box-shadow: 0 0 2px #111;
        }
      }
    }
  }
</style>
