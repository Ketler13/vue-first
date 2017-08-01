<template>
  <div class="new-excercise-form__wrapper">
    <form novalidateclass="new-excercise-form">
      <md-input-container>
        <label>title</label>
        <md-input v-model="title" type="text" @change="throwTitle($event)">
        </md-input>
      </md-input-container>
      <md-input-container>
        <label>description</label>
        <md-textarea v-model="text" type="text" @change="throwText($event)">
        </md-textarea>
      </md-input-container>
    </form>
  </div>
</template>

<script src="./NewExcerciseForm.js"></script>

<style scoped src="./NewExcerciseForm.css"></style>
