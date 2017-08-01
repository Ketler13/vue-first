<template>
  <div class="details">
    <md-whiteframe :key="title" md-elevation="10" class="detail" v-for="title in details">
      <md-button
        class="md-icon-button md-warn md-dense remove-button"
        @click="throwTitleUp(title)"
      >
        <md-icon>highlight_off</md-icon>
      </md-button>
      <detail :title="title">
      </detail>
  </md-whiteframe>
  </div>
</template>

<script src="./NewSplitDetails.js"></script>

<style scoped src="./NewSplitDetails.css"></style>
