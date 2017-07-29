<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/newsplit">new split</router-link>
      <router-link to="/splits">splits</router-link>
      <router-link to="/excercises">excercises</router-link>
      <router-link to="/login">log in</router-link>
      <router-link to="/signup">sign up</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
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
</style>
