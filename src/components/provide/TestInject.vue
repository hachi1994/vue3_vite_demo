<script setup>
import { inject } from "vue";
let user = inject("user");
console.log(user);
</script>
<template>
  <h1>这里inject</h1>
  <p>inject{{ user }}</p>
</template>

<style scoped></style>
