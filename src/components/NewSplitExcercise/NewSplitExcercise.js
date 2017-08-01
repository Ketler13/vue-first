export default {
  name: 'new-split-excercise',
  props: ['excercise', 'details'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    emitClick (checked) {
      this.checked = !this.checked
      const title = this.excercise.title
      this.$emit('click', {checked, title})
    },
    isChecked (title) {
      return this.details.includes(title)
    }
  }
}
