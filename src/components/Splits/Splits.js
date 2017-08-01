import Split from '../Split/Split.vue'

export default {
  name: 'splits',
  components: {
    'split': Split
  },
  computed: {
    splits () {
      return this.$store.state.splits
    },
    loadingSplits () {
      return this.$store.state.loadingSplits
    }
  },
  mounted () {
    if (!this.$store.state.isLogged) {
      this.$router.push({path: '/login'})
    } else {
      this.$store.dispatch('loadSplits')
    }
  }
}
