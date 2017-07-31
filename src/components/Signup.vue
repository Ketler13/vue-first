<template>
  <div class="signup-form__wrapper">
    <form novalidate @submit.stop.prevent="signup" class="signup-form">
      <md-input-container>
        <label>user name</label>
        <md-input v-model="name" type="text"></md-input>
      </md-input-container>
      <md-input-container>
        <label>email</label>
        <md-input v-model="email" type="email"></md-input>
      </md-input-container>
      <md-input-container>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">Sign up</md-button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    computed: {
      formFullfilled () {
        return this.email && this.password && this.name
      }
    },
    methods: {
      signup () {
        this.$store
          .dispatch('signUp', {name: this.name, email: this.email, password: this.password})
          .then(() => { this.$router.push({ path: '/login' }) })
          .catch(console.error)
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
</style>
