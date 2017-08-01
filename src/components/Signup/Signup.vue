<template>
  <div class="signup-form__wrapper">
    <form novalidate @submit.stop.prevent="signup" class="signup-form">
      <md-input-container>
        <label>user name</label>
        <md-input
          v-model="name" type="text" :debounce="400"
          @change="checkName($event)">
        </md-input>
      </md-input-container>
      <p v-show="nameUniqueError" class="error">{{nameUniqueError}}</p>
      <p v-show="nameValidError" class="error">{{nameValidError}}</p>
      <md-input-container>
        <label>email</label>
        <md-input v-model="email" type="email" :debounce="400"
        @change="checkEmail($event)"></md-input>
      </md-input-container>
      <p v-show="emailUniqueError" class="error">{{emailUniqueError}}</p>
      <p v-show="emailValidError" class="error">{{emailValidError}}</p>
      <md-input-container>
        <label>password</label>
        <md-input v-model="password" type="password"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-raised md-primary" :disabled="!formFullfilled">Sign up</md-button>
    </form>
  </div>
</template>

<script src="./Signup.js"></script>

<style scoped src="./Signup.css"></style>
