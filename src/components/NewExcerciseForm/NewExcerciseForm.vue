<template>
  <div class="new-excercise-form__wrapper">
    <form novalidateclass="new-excercise-form">
      <md-input-container>
        <label>title</label>
        <md-input :value="computedTitle" type="text" @change="throwTitle($event)">
        </md-input>
      </md-input-container>
      <md-input-container>
        <label>description</label>
        <md-textarea :value="computedText" type="text" @change="throwText($event)">
        </md-textarea>
      </md-input-container>
    </form>
  </div>
</template>

<script src="./NewExcerciseForm.js"></script>

<style scoped src="./NewExcerciseForm.css"></style>
