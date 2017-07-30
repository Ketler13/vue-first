<template>
  <form>
    <p>
      {{title}}
    </p>
    <input type="range" v-model="weight" min="0" max="200" step="1"/>
    <p>{{weight}} kg</p>
    <input type="range" v-model="times" min="0" max="50" step="1"/>
    <p>{{times}} times</p>
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
