<template>
  <div class="signup-form__wrapper">
    <form novalidate @submit.stop.prevent="signup" class="signup-form">
      <md-input-container>
        <label>user name</label>
        <md-input
          v-model="name" type="text" :debounce="400"
          @change="checkName($event)">
        </md-input>
      </md-input-container>
      <p v-show="nameUniqueError" class="error">{{nameUniqueError}}</p>
      <p v-show="nameValidError" class="error">{{nameValidError}}</p>
      <md-input-container>
        <label>email</label>
        <md-input v-model="email" type="email" :debounce="400"
        @change="checkEmail($event)"></md-input>
      </md-input-container>
      <p v-show="emailUniqueError" class="error">{{emailUniqueError}}</p>
      <p v-show="emailValidError" class="error">{{emailValidError}}</p>
      <md-input-container>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">Sign up</md-button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        emailUniqueError: '',
        emailValidError: '',
        nameUniqueError: '',
        nameValidError: ''
      }
    },
    computed: {
      formFullfilled () {
        return this.email && this.password && this.name && !this.emailValidError &&
        !this.emailUniqueError && !this.nameValidError && !this.nameUniqueError
      }
    },
    methods: {
      signup () {
        this.$store
          .dispatch('signUp', {name: this.name, email: this.email, password: this.password})
          .then(() => { this.$router.push({ path: '/login' }) })
          .catch(console.error)
      },
      checkName (name) {
        if (!name) {
          this.nameValidError = ''
          this.nameUniqueError = ''
          return
        }
        const pattern = /[a-zA-Z0-9]/
        if (!pattern.test(name)) {
          this.nameValidError = 'username must contain letters and numbers only'
          return
        } else {
          this.nameValidError = ''
        }
        axios({
          method: 'post',
          url: 'http://127.0.0.1:3000/api/checkName',
          data: JSON.stringify({name}),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          res.data.success
          ? this.nameUniqueError = ''
          : this.nameUniqueError = 'name already exists'
        })
        .catch(console.error)
      },
      clearNameErrors () {
        this.nameValidError = ''
        this.nameUniqueError = ''
      },
      checkEmail (email) {
        if (!email) {
          this.emailValidError = ''
          this.emailUniqueError = ''
          return
        }
        /* eslint-disable no-useless-escape */
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!pattern.test(email)) {
          this.emailValidError = 'incorrect email'
          return
        } else {
          this.emailValidError = ''
        }
        axios({
          method: 'post',
          url: 'http://127.0.0.1:3000/api/checkEMail',
          data: JSON.stringify({email}),
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(res => {
          res.data.success
          ? this.emailUniqueError = ''
          : this.emailUniqueError = 'email already exists'
        })
        .catch(console.error)
      },
      clearEmailErrors () {
        this.emailValidError = ''
        this.emailUniqueError = ''
      }
    }
  }
</script>

<style scoped>
  .signup-form__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signup-form {
    width: 40%;
  }

  .error {
    color: red;
  }
</style>
