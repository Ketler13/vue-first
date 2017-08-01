import NewSplitExcercise from '../NewSplitExcercise/NewSplitExcercise.vue'
import NewSplitDetails from '../NewSplitDetails/NewSplitDetails.vue'
import Chips from '../Chips/Chips.vue'

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
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
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
