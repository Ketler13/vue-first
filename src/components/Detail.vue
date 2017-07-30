<template>
  <form>
    <p>
      {{title}}
    </p>
    <label>
      weight, kg:
      <input type="number" v-model="weight"/>
    </label>
    <label>
      times:
      <input type="number" v-model="times"/>
    </label>
    <button @click="addSetToSplit">add set</button>
  </form>
</template>

<script>
  export default {
    name: 'detail',
    props: ['title'],
    data () {
      return {
        weight: 0,
        times: 0
      }
    },
    methods: {
      addSetToSplit () {
        console.log(this.weight, this.times)
      }
    }
  }
</script>
