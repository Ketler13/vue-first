<template>
  <div>
    <ul class="excercise-handler">
      <new-split-excercise-list
        v-for="excercise in excercises"
        v-bind:excercise="excercise"
        v-bind:key="excercise.id"
      >
      </new-split-excercise-list>
    </ul>
  </div>
</template>

<script>
  import NewSplitExcerciseList from './NewSplitExcerciseList'

  export default {
    name: 'newsplit',
    components: {
      'new-split-excercise-list': NewSplitExcerciseList
    },
    computed: {
      excercises () {
        return this.$store.state.excercises
      }
    },
    mounted () {
      this.$store.state.token && this.$store
        .dispatch('loadExcercises')
    }
  }
</script>

<style scoped>
  .excercise-handler {
    display: flex;
    flex-flow: row wrap;
  }
</style>
