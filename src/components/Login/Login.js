export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      logging: false
    }
  },
  computed: {
    formFullfilled () {
      return !!this.email && !!this.password && !this.logging
    }
  },
  methods: {
    login () {
      this.logging = true
      this.$store
        .dispatch('logIn', {email: this.email, password: this.password})
        .then(() => {
          this.logging = false
          this.$router.push({ path: '/newsplit' })
        })
        .catch(console.error)
    }
  }
}
