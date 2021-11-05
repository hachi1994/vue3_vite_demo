<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>
<script setup lang="ts">
import { ref } from "vue";
interface Person {
  name: String;
  age: Number;
}
function foo(p: Person): String {
  console.log(p.name, p.age);
  return "ok";
}
let a: String = ref(
  "测试自定义指令绑在组件上,指令会绑定在最外层元素上，如果有多个同级的最外层元素，则会爆出warnig在控制台"
).value;
</script>
<template>
  <h6 @click="foo({ name: 'lhc', age: 20 })">
    {{ a }}
    <teleport to="#app">helow</teleport>
  </h6>
</template>

<style scoped></style>
