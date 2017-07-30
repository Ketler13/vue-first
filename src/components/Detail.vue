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
    <button @click.prevent="addSetToSplit">add set</button>
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
        let { title, weight, times } = this
        if (weight && times) {
          this.$store.commit('addSetToSplit', {title, weight, times})
          this.weight = 0
          this.times = 0
        }
      }
    }
  }
</script>
