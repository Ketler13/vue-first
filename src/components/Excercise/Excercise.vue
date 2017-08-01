<template>
  <md-whiteframe md-elevation="2">
    <p @click="toggleBody">{{excercise.title}}</p>
    <p v-show="isOpen">{{excercise.text}}</p>
  </md-whiteframe>
</template>


<script src="./Excercise.js"></script>
