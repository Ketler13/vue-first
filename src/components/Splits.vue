<template>
  <div>
    <p>Splits</p>
    <p v-if="!splits.length">no splits yet</p>
    <ul class="splits">
      <li :key="split.id" v-for="split in splits" class="split">
        <split :split="split"></split>
      </li>
    </ul>
  </div>
</template>

<script>
  import Split from './Split'

  export default {
    name: 'splits',
    components: {
      'split': Split
    },
    computed: {
      splits () {
        return this.$store.state.splits
      }
    },
    mounted () {
      if (!this.$store.state.isLogged) {
        this.$router.push({path: '/login'})
      } else {
        this.$store.dispatch('loadSplits')
      }
    }
  }
</script>

<style scoped>
  .splits {
    display: flex;
    flex-flow: row wrap;
  }

  .split {
    margin: 0 10px;
  }
</style>
