<template>
  <li>
    <label>
      <input type="checkbox" value="22" />
      {{excercise.title}}
    </label>
  </li>
</template>

<script>
  export default {
    name: 'new-split-excercise-list',
    props: ['excercise']
  }
</script>
