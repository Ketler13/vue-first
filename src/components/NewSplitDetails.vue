<template>
  <div>
    <detail v-for="title in details" :title="title" :key="title">
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
