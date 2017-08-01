<template>
  <div class="excercises">
    <md-dialog md-open-from="#newFormOpener" md-close-to="#newFormOpener" ref="newExcercise">
      <md-dialog-content>
        <new-excercise-form
          @titleChange="setNewExcerciseTitle($event)"
          @textChange="setNewExcerciseText($event)"
          :title="newExcerciseTitle"
          :text="newExcerciseText"
        ></new-excercise-form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('newExcercise')">
          Cancel
        </md-button>
        <md-button class="md-primary" @click="addExcercise('exc')">
          Add
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button
      class="md-primary"
      id="newFormOpener"
      @click="openDialog('newExcercise')"
    >
      Add excercise
    </md-button>
    <ul>
      <li v-for="excercise in excercises">
        <excercise :excercise="excercise"></excercise>
      </li>
    </ul>
  </div>
</template>

<script src="./Excercises.js"></script>

<style scoped src="./Excercises.css"></style>
