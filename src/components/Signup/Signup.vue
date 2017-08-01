<template>
  <div class="signup-form__wrapper">
    <form novalidate @submit.stop.prevent="signup" class="signup-form">
      <md-input-container :class="{'md-input-invalid': nameError}">
        <label>user name</label>
        <md-input
          v-model="name" type="text" :debounce="400"
          @change="checkName($event)">
        </md-input>
        <span class="md-error">{{nameError}}</span>
      </md-input-container>

      <md-input-container :class="{'md-input-invalid': emailError}">
        <label>email</label>
        <md-input v-model="email" type="email" :debounce="400"
          @change="checkEmail($event)">
        </md-input>
        <span class="md-error">{{emailError}}</span>
      </md-input-container>

      <md-input-container md-has-password>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>

      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">
        Sign up
      </md-button>
    </form>
  </div>
</template>

<script src="./Signup.js"></script>

<style scoped src="./Signup.css"></style>
