import Excercise from '../Excercise/Excercise.vue'

export default {
  name: 'excercises',
  components: {
    excercise: Excercise
  },
  computed: {
    excercises () {
      return this.$store.state.excercises
    }
  }
}
