<template>
  <p class="chips">
    <md-chip
      v-for="excercise in excercises"
      :key="excercise.name"
      @delete="remove(excercise.name)"
      md-deletable
      class="chip"
    >
      {{excercise.name}}
      <span v-for="(set, index) in excercise.sets" :key="index" class="set" >
        {{set}}
      </span>
    </md-chip>
  </p>
</template>

<script>
  export default {
    name: 'chips',
    computed: {
      excercises () {
        return this.$store.state.excercisesInSplit
      }
    },
    methods: {
      remove (title) {
        this.$store.commit('removeExcerciseByChips', title)
      }
    }
  }
</script>

<style scoped>
  .chips {
    display: flex;
    align-items: flex-start;
  }

  .chip {
    margin: 0 5px;
  }

  .set {
    margin: 0 3px;
  }
</style>
