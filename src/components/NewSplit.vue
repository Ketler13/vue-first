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
    <button type="button" v-show="submitButtonIsVisible" @click="addSplit">ADD SPLIT</button>
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
      },
      addSplit () {
        this.$store
          .dispatch('addSplit')
          .then(result => {
            if (result.data.success) {
              this.$store.commit('refreshStore')
              setTimeout(() => this.$router.push({path: '/splits'}), 500)
            }
          })
          .catch(console.error)
      }
    },
    computed: {
      excercises () {
        return this.$store.state.excercises
      },
      details () {
        return this.$store.state.details
      },
      submitButtonIsVisible () {
        return this.$store.state.excercisesInSplit.length
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
