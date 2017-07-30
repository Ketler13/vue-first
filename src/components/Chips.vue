<template>
  <p class="chips">
    <span class="chip" v-for="excercise in excercises">
      {{excercise.name}}
      <span v-for="set in excercise.sets" class="set">{{set}}</span>
      <span class="delete" @click="remove(excercise.name)">X</span>
    </span>
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
  .chip {
    display: inline-block;
    margin: 0 5px;
    padding: 3px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .delete {
    color: red;
    cursor: pointer;
  }

  .set {
    margin: 0 3px;
  }
</style>
