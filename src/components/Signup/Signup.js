import { _checkName, _checkEmail, pattern } from '@/helpers'

export default {
  name: 'login',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      emailError: '',
      nameError: '',
      registering: false
    }
  },
  computed: {
    formFullfilled () {
      return this.email && this.password && this.name && !this.emailError &&
      !this.nameError && !this.registering
    }
  },
  methods: {
    signup () {
      this.registering = true
      this.$store
        .dispatch('signUp', {name: this.name, email: this.email, password: this.password})
        .then(() => {
          this.registering = false
          this.$router.push({ path: '/login' })
        })
        .catch(console.error)
    },
    async checkName (name) {
      if (!name) {
        this.nameError = ''
        this.nameError = ''
        return
      }
      const pattern = /[a-zA-Z0-9]/
      if (!pattern.test(name)) {
        this.nameError = 'username must contain letters and numbers only'
        return
      } else {
        this.nameError = ''
      }
      try {
        const res = await _checkName(name)
        res.data.success
        ? this.nameError = ''
        : this.nameError = 'name already exists'
      } catch (e) {
        console.error(e)
      }
    },
    clearNameErrors () {
      this.nameError = ''
    },
    async checkEmail (email) {
      if (!email) {
        this.emailError = ''
        this.emailError = ''
        return
      }
      if (!pattern.test(email)) {
        this.emailError = 'incorrect email'
        this.emailError = ''
        return
      } else {
        this.emailError = ''
      }
      try {
        const res = await _checkEmail(email)
        res.data.success
        ? this.emailError = ''
        : this.emailError = 'email already exists'
      } catch (e) {
        console.error(e)
      }
    },
    clearEmailErrors () {
      this.emailError = ''
      this.emailError = ''
    }
  }
}
