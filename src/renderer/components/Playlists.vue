<template>
  <div class="playlists-page">
    <nav-bar></nav-bar>
    <div class="playlists-wrapper">
      <div class="columns">
        <div class="column is-narrow playlists-bar-wrapper">
          <div class="playlists-bar">
            <a class="playlist-link" id='create-playlist'>+ New Playlist</a>
            <a class="playlist-link is-selected">Playlist 1</a>
            <a class="playlist-link">Playlist 2</a>
            <a class="playlist-link">Playlist 3</a>
            <a class="playlist-link">Playlist 4</a>
            <a class="playlist-link">Playlist 5</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import SideBar from './SideBar'

  export default {
    name: 'playlists',
    components: { NavBar, SideBar }
  }
</script>

<style lang="scss" scoped>
  .playlists-page {
    padding-top: 1.5em;
    height: 100%;
    background-color: $color-dark-gray;

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
    }
  }
</style>
