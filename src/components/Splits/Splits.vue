<template>
  <div class="splits">
    <p v-if="!splits.length">no splits yet</p>
    <ul class="splits">
      <li :key="split.id" v-for="split in splits" class="split">
        <split :split="split"></split>
      </li>
    </ul>
  </div>
</template>

<script src="./Splits.js"></script>

<style scoped src="./Splits.css"></style>
