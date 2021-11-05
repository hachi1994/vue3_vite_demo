<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
let routes = ref([
  { name: "home", path: "/" },
  { name: "testRoute", path: "/testRoute/30" },
  { name: "testProvide", path: "/testProvide" },
  { name: "testMixin", path: "/testMixin" },
  { name: "testDirectives", path: "/testDirectives" },
  { name: "testAsyncComponent", path: "/testAsyncComponent" },
]);
</script>

<template>
  <div v-for="(item, index) in routes" :key="index">
    <router-link :to="item.path">{{ item.name }}</router-link>
  </div>
  <router-view />
</template>

<style></style>
