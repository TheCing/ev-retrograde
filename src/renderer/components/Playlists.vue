<template>
  <div class="playlists-page">
    <nav-bar></nav-bar>
    <div class="playlists-wrapper">
      <h1>Playlists</h1>
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

    .playlists-wrapper {
      h1 {
        text-transform: uppercase;
        font-family: $font-body;
      }
    }
  }
</style>
