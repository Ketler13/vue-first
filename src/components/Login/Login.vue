<template>
  <div class="login-form__wrapper">
    <form novalidate @submit.stop.prevent="login" class="login-form">
      <md-input-container>
        <label>email</label>
        <md-input v-model="email" type="email"></md-input>
      </md-input-container>
      <md-input-container>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">Log in</md-button>
    </form>
  </div>
</template>

<script src="./Login.js"></script>

<style scoped src="./Login.css"></style>
