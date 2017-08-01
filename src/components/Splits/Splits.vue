<template>
  <div class="splits">
    <p v-if="!loadingSplits && !splits.length" class="no-splits">no splits yet</p>
    <p v-if="loadingSplits" class="loader">...loading</p>
    <ul class="split-list">
      <li :key="split.id" v-for="split in splits" class="split-item">
        <split :split="split"></split>
      </li>
    </ul>
  </div>
</template>

<script src="./Splits.js"></script>

<style scoped src="./Splits.css"></style>
