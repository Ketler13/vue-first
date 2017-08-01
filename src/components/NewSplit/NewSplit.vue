<template>
  <div class="new-split">
    <md-dialog md-open-from="#select" md-close-to="#select" ref="excercises">
      <md-dialog-content>
        <ul class="excercise-handler">
          <new-split-excercise
            v-for="excercise in excercises"
            :details="details"
            :excercise="excercise"
            :key="excercise.id"
            @click="handleExcercise($event)"
          >
          </new-split-excercise>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('excercises')">
          Ok
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button
      class="md-primary"
      id="select"
      @click="openDialog('excercises')"
    >
      Select excercises
    </md-button>

    <chips></chips>
    <md-button
      class="md-raised md-accent fullwidth"
      v-show="submitButtonIsVisible"
      @click="addSplit"
    >
      Create split
    </md-button>
    <new-split-details :details="details" @remove="handleExcercise($event)">
    </new-split-details>
  </div>
</template>

<script src="./NewSplit.js"></script>

<style scoped src="./NewSplit.css"></style>
