<script setup>
import { onMounted } from "vue";
import Child from "./Child.vue";
onMounted(function () {
  console.log("testMixin");
});
</script>
<script>
export default {
  data() {
    return {
      position: "top",
      pinPadding: 200,
    };
  },
  directives: {
    focus: {
      mounted(el) {
        console.log(el);
        el.focus();
      },
    },
    position: {
      mounted(el, bind) {
        console.log(el, bind, 44);
        el.style.position = "fixed";
        let pos = bind.arg || "top";
        el.style[pos] = bind.value + "px";
      },
      updated(el, bind) {
        let pos = bind.arg || "top";
        el.style[pos] = bind.value + "px";
      },
    },
  },
};
</script>
<template>
  <h1 ref="testInject">测试自定义指令</h1>
  <input type="text" v-focus />
  <input type="range" min="0" max="500" v-model="pinPadding" />
  <div v-position:[position]="pinPadding">自定义指令附带参数</div>
  <Child v-position:[position]="pinPadding" />
</template>

<style scoped></style>
