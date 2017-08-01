<template>
  <div class="excercises">
    <ul>
      <li v-for="excercise in excercises">
        <excercise :excercise="excercise"></excercise>
      </li>
    </ul>
  </div>
</template>

<script src="./Excercises.js"></script>
