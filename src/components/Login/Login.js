export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    formFullfilled () {
      return !!this.email && !!this.password
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('logIn', {email: this.email, password: this.password})
        .then(() => { this.$router.push({ path: '/newsplit' }) })
        .catch(console.error)
    }
  }
}
