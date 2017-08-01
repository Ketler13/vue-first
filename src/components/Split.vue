<template>
  <md-whiteframe md-elevation="10" class="split">
    <p>
      {{split.date}}
    </p>
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
  import axios from 'axios'

  export default {
    name: 'split',
    props: ['split'],
    data () {
      return {
        rate: +this.split.mark
      }
    },
    methods: {
      setRate (rate) {
        axios({
          method: 'patch',
          url: `http://127.0.0.1:3000/api/splits/${this.split.id}`,
          headers: {
            'content-type': 'application/json',
            token: this.$store.state.token
          },
          data: {
            rate
          }
        })
        .then(res => {
          if (res.data.success) {
            this.rate = rate
          }
        })
      }
    }
  }
</script>

<style scoped>
  .split {
    padding: 5px;
  }
  .set {
    margin: 0 5px;
  }
</style>
