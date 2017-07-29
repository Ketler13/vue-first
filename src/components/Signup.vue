<template>
  <form class="login-form" v-on:submit.prevent="signup">
    <input type="text" v-model="name" placeholder="name" class="form-input"/>
    <input type="email" v-model="email" placeholder="email" class="form-input"/>
    <input type="password" v-model="password" placeholder="password" class="form-input"/>
    <button type="submit" v-bind:disabled="!formFullfilled" class="form-button">Sign up</button>
  </form>
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
