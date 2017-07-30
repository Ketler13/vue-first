<template>
  <div>
    <p>
      {{split.date}}
    </p>
    <ul>
      <li v-for="excercise in split.excercises" :key="excercise.name">
        {{excercise.name}}:
        <span v-for="set in excercise.sets" class="set">{{set}}</span>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'split',
    props: ['split']
  }
</script>

<style scoped>
  .set {
    margin: 0 5px;
  }
</style>
