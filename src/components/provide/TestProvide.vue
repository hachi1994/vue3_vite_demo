<script setup>
import { provide, ref, onMounted } from "vue";
import TestInject from "@components/provide/TestInject.vue";
provide("user", "lhc");
let testInject = ref(null);
onMounted(function () {
  console.log(testInject, "234");
});
</script>
<script>
const mixin = {
  data() {
    return {
      name: "lhc",
    };
  },
};
export default {
  mixins: [mixin],
  data() {
    return {
      msg: "nima",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        console.log(el);
        el.focus();
      },
    },
  },
};
</script>
<template>
  <h1 ref="testInject">测试provide</h1>
  {{ msg + name }}
  <input type="text" v-focus />
  <TestInject />
</template>

<style scoped></style>
