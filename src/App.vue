<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/newsplit" v-if="isLogged">new split</router-link>
      <router-link to="/splits" v-if="isLogged">splits</router-link>
      <router-link to="/excercises" v-if="isLogged">excercises</router-link>
      <router-link to="/login" v-if="!isLogged">log in</router-link>
      <router-link to="/signup" v-if="!isLogged">sign up</router-link>
      <a href="#" v-if="isLogged" @click.prevent="logout">log out</a>
    </nav>
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
    width: 30%;
    margin: 0px auto;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }


  a {
    color: #42b983;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>
