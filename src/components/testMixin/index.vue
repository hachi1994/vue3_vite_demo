<script setup>
import { onMounted } from "vue";
onMounted(function () {
  console.log("testMixin");
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
  <h1 ref="testInject">测试Mixin</h1>
  {{ name + msg + query }}
  <input type="text" v-focus />
</template>

<style scoped></style>
