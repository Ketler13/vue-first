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
      this.$store.dispatch('loadSplits')
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
    padding: 5px;
    text-align: left;
    box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);
  }
</style>
