export default {
  name: 'split',
  data () {
    return {
      isOpen: false
    }
  },
  props: ['excercise'],
  methods: {
    toggleBody () {
      this.isOpen = !this.isOpen
    }
  }
}
