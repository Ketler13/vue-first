<template>
  <div>
    <p @click="toggleBody">{{excercise.title}}</p>
    <p v-show="isOpen">{{excercise.text}}</p>
  </div>
</template>


<script src="./Excercise.js"></script>
