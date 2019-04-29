<template>
  <div id="nav-wrapper">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link @click="getContent()" class="navbar-item" to="/">
          <h1 class="nav-title">Retrograde</h1>
        </router-link>
        <!-- <router-link @click="getContent()" class="navbar-item" to="/" id="library">
          <h1 class="nav-text">LIBRARY</h1>
        </router-link> -->
        <!-- <router-link @click="getContent()" class="navbar-item" to="/playlists">
          <h1 class="nav-text">PLAYLISTS</h1>
        </router-link> -->
        <!-- <router-link class="navbar-item" to="/">
          <h1 class="nav-text">SAVES</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">CONFIG</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">SEARCH</h1>
        </router-link> -->
      </div>
    </nav>
  </div>
</template>

<script>
  const axios = require('axios')

  export default {
    name: 'nav-bar',
    methods: {
      getContent () {
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
  }
</script>

<style lang="scss">
  .navbar {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.31);
  }

  #library {
    margin-left: 4em;
  }

  .navbar-brand {
    .navbar-item {
      font-size: 2em;

      &:hover {
        color: $color-indigo;
      }
    }
  }

  .nav-title {
    font-family: $font-logo;
  }

  .nav-text {
    font-family: $font-body;
    // font-weight: 700;
    font-style: italic;
  }
</style>
