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
    top: 50%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 50%;
    height: 50%;
    z-index: 1000;
    background-color: $color-light-gray;
    font-family: $font-body;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
</style>
