import Detail from '../Detail/Detail.vue'
export default {
  name: 'new-split-details',
  props: ['details'],
  components: {
    'detail': Detail
  },
  methods: {
    throwTitleUp (title) {
      this.$store.commit('removeExcerciseFromSplit', title)
      // this.$emit('remove', {checked: false, title})
    }
  }
}
