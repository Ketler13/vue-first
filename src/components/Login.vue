<template>
  <div class="login-form__wrapper">
    <form novalidate @submit.stop.prevent="login" class="login-form">
      <md-input-container>
        <label>email</label>
        <md-input v-model="email" type="email"></md-input>
      </md-input-container>
      <md-input-container>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">Log in</md-button>
    </form>
  </div>
</template>

<script>
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
</script>

<style scoped>
  .login-form__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    width: 40%;
  }
</style>
