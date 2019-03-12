<template>
  <div class="modal-wrapper">
    <div class="section modal-section">
      <div class="container has-text-centered">
        <div class="img-wrapper">
          <img src="https://picsum.photos/1368/768" alt="Current Image">
        </div>
        <div class="slide-text notification">
          <p>Slide descritpion</p>
        </div>
        <div class="slide-controls">
          <a class="prev-button">Previous</a>
          <span class="slide-indicator is-selected">·</span>
          <span class="slide-indicator">·</span>
          <span class="slide-indicator">·</span>
          <a class="next-button">Next</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro-modal'
}
</script>

<style lang="scss" scoped>
  .modal-wrapper {
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

    .modal-section {
      .container {
        .img-wrapper {
          padding: 1em;
          img {
            max-width: 80%;
          }
        }
        .slide-text {
          margin-left: 7em;
          margin-right: 7em;
          background-color: rgb(50, 53, 58);
          color: white;
        }
        .slide-controls {
          display: inline-flex;
          align-items: center;

          a {
            color: #c7c7c7;
            padding: 0.25rem 1rem;
            transition: all 0.25s;

            &:hover {
              color: white;
              background-color: #32353a;
              border-radius: 4px;
            }
          }
          span {
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 2em;
            color: lighten($color-light-gray, 20%);

            &.is-selected {
              color: white;
            }
          }
        }
      }
    }
  }
</style>
