<template>
  <div class="details">
    <md-whiteframe :key="title" md-elevation="10" class="detail" v-for="title in details">
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
    }
  }
</script>

<style scoped>
  .details {
    max-width: 960px;
    display: flex;
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
</style>
