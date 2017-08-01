export default {
  name: 'new-excercise-form',
  props: ['title', 'text'],
  // data () {
  //   return {
  //     title: '',
  //     text: ''
  //   }
  // },
  computed: {
    formFullfilled () {
      return !!this.title && !!this.text
    },
    computedTitle () {
      return this.title
    },
    computedText () {
      return this.text
    }
  },
  methods: {
    addExcercise () {
      console.log(this.title, this.text)
    },
    throwTitle (title) {
      this.$emit('titleChange', title)
    },
    throwText (text) {
      this.$emit('textChange', text)
    }
  }
}
