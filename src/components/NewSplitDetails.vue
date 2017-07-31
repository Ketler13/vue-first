<template>
  <div class="details">
    <md-whiteframe :key="title" md-elevation="10" class="detail" v-for="title in details">
      <md-button
        class="md-icon-button md-warn md-dense remove-button"
        @click="throwTitleUp(title)"
      >
        <md-icon>highlight_off</md-icon>
      </md-button>
      <detail :title="title">
      </detail>
  </md-whiteframe>
  </div>
</template>

<script>
  import Detail from './Detail'
  export default {
    name: 'new-split-details',
    props: ['details'],
    components: {
      'detail': Detail
    },
    methods: {
      throwTitleUp (title) {
        this.$store.commit('removeExcerciseFromSplit', title)
        // this.$emit('remove', {checked: false, title})
      }
    }
  }
</script>

<style scoped>
  .details {
    max-width: 960px;
    display: flex;
    position: relative;
    flex-flow: row wrap;
  }

  .detail {
    width: 20%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 10px 10px;
    padding: 5px;
  }

  .remove-button {
    position: absolute;
    top: 5px;
    left: 140px;
  }
</style>
