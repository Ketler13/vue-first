<template>
  <li>
    <label>
      <input type="checkbox" value="22" @click="emitClick($event.target.checked)"/>
      {{excercise.title}}
    </label>
  </li>
</template>

<script>
  export default {
    name: 'new-split-excercise',
    props: ['excercise'],
    methods: {
      emitClick (checked) {
        const title = this.excercise.title
        this.$emit('click', {checked, title})
      }
    }
  }
</script>
