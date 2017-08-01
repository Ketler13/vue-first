<template>
  <md-whiteframe md-elevation="10" class="split">
    <p>
      {{split.date}}
    </p>
    <md-button
      @click="removeSplit"
      class="md-icon-button md-warn md-dense remove-button"
    >
      <md-icon>highlight_off</md-icon>
    </md-button>
    <ul>
      <li v-for="excercise in split.excercises" :key="excercise.name">
        {{excercise.name}}:
        <span v-for="set in excercise.sets" class="set">{{set}}</span>
      </li>
    </ul>
    <md-rating-bar :value="rate" :md-max-rating="5" class="md-primary"
      :md-empty-icon="'star_border'" @change="setRate($event)"></md-rating-bar>
  </md-whiteframe>
</template>


<script>
  import { _setRate, _removeSplit } from '@/helpers'

  export default {
    name: 'split',
    props: ['split'],
    data () {
      return {
        rate: +this.split.mark
      }
    },
    methods: {
      async setRate (rate) {
        try {
          const res = await _setRate(rate, this.split.id, this.$store.state.token)
          if (res.data.success) {
            this.rate = rate
          }
        } catch (e) {
          console.error(e)
        }
      },
      async removeSplit () {
        try {
          const res = await _removeSplit(this.split.id, this.$store.state.token)
          if (res.data.success) {
            this.$store.commit('removeSplit', this.split.id)
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>
  .split {
    padding: 5px;
    position: relative;
  }

  .remove-button {
    position: absolute;
    top: 0;
    right: 0;
  }

  .set {
    margin: 0 5px;
  }
</style>
