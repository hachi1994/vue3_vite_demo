<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
function show() {
  alert("show");
}
let level = ref(1);
</script>
<template>
  <div>
    <Child @show="show" :level="level">
      <template v-slot:name>
        <div>999</div>
      </template>
      <template v-slot:default="dd">
        {{ dd }}
        <div>slot</div>
      </template>
    </Child>
  </div>
</template>
