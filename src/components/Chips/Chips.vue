<template>
  <p class="chips">
    <md-chip
      v-for="excercise in excercises"
      :key="excercise.name"
      @delete="remove(excercise.name)"
      md-deletable
      class="chip"
    >
      {{excercise.name}}
      <span v-for="(set, index) in excercise.sets" :key="index" class="set" >
        {{set}}
      </span>
    </md-chip>
  </p>
</template>

<script src="./Chips.js"></script>

<style scoped src="./Chips.css"></style>
