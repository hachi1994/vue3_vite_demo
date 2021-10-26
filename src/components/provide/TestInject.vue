<script setup>
import { inject } from "vue";
let user = inject("user");
//全局注入
let agr = inject("agr");
</script>
<template>
  <h1>这里inject</h1>
  <p>inject{{ user }}</p>
  <p>全局注入{{ agr }}</p>
</template>

<style scoped></style>
