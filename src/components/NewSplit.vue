<template>
  <div>
    <ul class="excercise-handler">
      <new-split-excercise
        v-for="excercise in excercises"
        :excercise="excercise"
        :key="excercise.id"
        @click="handleExcercise($event)"
      >
      </new-split-excercise>
    </ul>
    <chips></chips>
    <new-split-details :details="details">
    </new-split-details>
  </div>
</template>

<script>
  import NewSplitExcercise from './NewSplitExcercise'
  import NewSplitDetails from './NewSplitDetails'
  import Chips from './Chips'

  export default {
    name: 'newsplit',
    components: {
      'new-split-excercise': NewSplitExcercise,
      'new-split-details': NewSplitDetails,
      'chips': Chips
    },
    methods: {
      handleExcercise ({checked, title}) {
        if (checked) {
          this.$store.commit('addExcerciseToSplit', title)
        } else {
          this.$store.commit('removeExcerciseFromSplit', title)
        }
      }
    },
    computed: {
      excercises () {
        return this.$store.state.excercises
      },
      details () {
        return this.$store.state.details
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
