<template>
  <div id="nav-wrapper">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h1 class="nav-title">Retrograde</h1>
        </router-link>
        <router-link class="navbar-item" to="/library" id="library">
          <h1 class="nav-text">LIBRARY</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">PLAYLISTS</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">SAVES</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">CONFIG</h1>
        </router-link>
        <router-link class="navbar-item" to="/">
          <h1 class="nav-text">SEARCH</h1>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    }
  }
</script>

<style lang="scss">
  #nav-wrapper {
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
