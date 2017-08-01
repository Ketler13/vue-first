import Excercise from '../Excercise/Excercise.vue'
import NewExcerciseForm from '../NewExcerciseForm/NewExcerciseForm.vue'

export default {
  name: 'excercises',
  components: {
    'excercise': Excercise,
    'new-excercise-form': NewExcerciseForm
  },
  data () {
    return {
      newExcerciseTitle: '',
      newExcerciseText: ''
    }
  },
  computed: {
    excercises () {
      return this.$store.state.excercises
    }
  },
  mounted () {
    if (!this.$store.state.isLogged) {
      this.$router.push({path: '/login'})
    }
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    addExcercise (excercise) {
      const data = {
        title: this.newExcerciseTitle, text: this.newExcerciseText
      }
      this.$store.dispatch('addExcercise', data)
      this.closeDialog('newExcercise')
    },
    setNewExcerciseTitle (title) {
      this.newExcerciseTitle = title
    },
    setNewExcerciseText (text) {
      this.newExcerciseText = text
    }
  }
}
