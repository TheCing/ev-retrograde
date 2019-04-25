<template>
  <div class="add-modal-wrapper">
    test
  </div>
</template>

<script>
export default {
  name: 'add-modal'
}
</script>

<style lang="scss" scoped>
  .add-modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: $color-dark-gray;
    font-family: $font-body;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
</style>
