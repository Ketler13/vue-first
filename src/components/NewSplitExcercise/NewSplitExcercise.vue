<template>
  <li>
    <md-checkbox :value="isChecked(excercise.title)" @change="emitClick($event)">{{excercise.title}}</md-checkbox>
  </li>
</template>

<script src="./NewSplitExcercise.js"></script>
