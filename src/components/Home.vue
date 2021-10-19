<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "@/components/Helloworld.vue";
import { ref } from "vue";
let num = ref(0);
function plus() {
  num.value++;
}
</script>

<template>
  <HelloWorld @qc="plus">
    <template v-slot:header="{ age }">
      <h1>{{ age }}</h1>
    </template>
  </HelloWorld>
  {{ num }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
