<template>
  <div>
    <p @click="toggleBody">{{excercise.title}}</p>
    <p v-show="isOpen">{{excercise.text}}</p>
  </div>
</template>


<script>
  export default {
    name: 'split',
    data () {
      return {
        isOpen: false
      }
    },
    props: ['excercise'],
    methods: {
      toggleBody () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
