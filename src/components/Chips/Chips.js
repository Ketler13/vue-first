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
