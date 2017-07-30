<template>
  <div class="details">
    <detail class="detail" v-for="title in details" :title="title" :key="title">
    </detail>
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
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0 10px;
    box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);
    padding: 5px;
  }
</style>
