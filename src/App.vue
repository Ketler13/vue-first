<template>
  <div id="app">
    <md-toolbar class="main-nav">
      <router-link tag="md-button" to="/newsplit" v-if="isLogged">new split</router-link>
      <router-link tag="md-button" to="/splits" v-if="isLogged">splits</router-link>
      <router-link tag="md-button" to="/excercises" v-if="isLogged">excercises</router-link>
      <span v-if="isLogged" style="flex: 1"></span>
      <router-link tag="md-button" to="/login" v-if="!isLogged">log in</router-link>
      <router-link tag="md-button" to="/signup"v-if="!isLogged">sign up</router-link>
      <md-button v-if="isLogged" @click.prevent="logout" class="md-warn">log out</md-button>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push({path: '/login'})
    }
  },
  computed: {
    isLogged () {
      return this.$store.state.isLogged
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main-nav {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }


  a {
    color: #42b983;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .fullwidth {
    width: 100%;
  }

  .new-split, .splits, .excercises {
    width: 80%;
    margin: 20px auto;
  }

  .router-link-active {
    color: pink;
  }

  .signup-form__wrapper, .login-form__wrapper {
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }

  .signup-form, .login-form {
    width: 40%;
  }

  .error {
    color: red;
  }
</style>
