<template>
  <div>
    <p>Excercises</p>
    <ul>
      <li v-for="excercise in excercises">
        <excercise :excercise="excercise"></excercise>
      </li>
    </ul>
  </div>
</template>

<script>
  import Excercise from './Excercise'

  export default {
    name: 'excercises',
    components: {
      excercise: Excercise
    },
    computed: {
      excercises () {
        return this.$store.state.excercises
      }
    }
  }
</script>
