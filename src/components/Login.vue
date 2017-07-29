<template>
  <form class="login-form" v-on:submit.prevent="login">
    <input type="email" v-model="email" placeholder="email" class="form-input"/>
    <input type="password" v-model="password" placeholder="password" class="form-input"/>
    <button type="submit" v-bind:disabled="!formFullfilled" class="form-button">Log in</button>
  </form>
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
        return this.email && this.password
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
  .login-form {
    margin-top: 100px;
  }

  .form-input {
    border: 1px solid #42b983;
    border-radius: 10px;
    padding-left: 5px;
  }

  .form-button {
    width: 70px;
    border: none;
    border-radius: 10px;
    background-color: #42b983;
    color: white;
  }

  .form-button:disabled {
    background-color: gray;
  }
</style>
