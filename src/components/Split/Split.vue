<template>
  <md-whiteframe md-elevation="2" class="split">
    <p>
      {{split.date | convertDate}}
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
      :md-empty-icon="'star_border'" @change="setRate($event)">
    </md-rating-bar>
  </md-whiteframe>
</template>


<script src="./Split.js"></script>

<style scoped src="./Split.css"></style>
