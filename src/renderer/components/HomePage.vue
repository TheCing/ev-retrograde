<template>
  <div id="home-page">
    <intro-modal></intro-modal>
    <nav-bar></nav-bar>
    <div class="home-wrapper">
      <!-- <div class="section">
        <h1>Welcome</h1>
      </div> -->
      <div class="columns">
        <div class="column is-narrow console-bar-wrapper">
          <div class="console-bar">
            <a class="console-link is-selected"><router-link to="/home"><img src="static/images/NES.png" alt="NES"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/SNES.png" alt="SNES"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/GB.png" alt="GB"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/Genesis.png" alt="Genesis"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/Atari2600.png" alt="Atari 2600"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/Atari5200.png" alt="Atari 5200"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/Atari7800.png" alt="Atari 7800"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/FamicomDisk.png" alt="Famicom Disk System"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/GameGear.png" alt="Sega Game Gear"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/N64.png" alt="Nintendo 64"></router-link></a>
            <a class="console-link"><router-link to="/home"><img src="static/images/NEOGEO.png" alt="Neo Geo Pocket"></router-link></a>
          </div>
        </div>
        <div class="column results-view-wrapper">
          <div class="section results-view">
            <h1 class="results-title">Nintendo Entertainment System</h1>
            <hr>
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

  export default {
    name: 'home',
    components: { NavBar, SideBar, IntroModal },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
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
    }
  }

  .columns {
    height: -webkit-fill-available;
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
    }
  }
</style>
