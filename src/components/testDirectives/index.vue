<script setup>
import { onMounted, ref, reactive } from "vue";
import Child from "./Child.vue";
let hello = reactive({ say: "hello" });
function mountedFunc() {
  console.log("mounted!");
}
onMounted(function () {
  console.log("testMixin", hello);
  setTimeout(() => {
    hello.say = "441";
  }, 3000);
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
        el.style.position = "fixed";
        let pos = bind.arg || "top";
        el.style[pos] = bind.value + "px";
      },
      updated(el, bind) {
        console.log(el, "wri");
        let pos = bind.arg || "top";
        el.style[pos] = bind.value + "px";
      },
    },
    hello: {
      mounted(el, bind) {
        console.log(el, bind, 44);
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
  <Child @vnode-mounted="mountedFunc" v-position:[position]="pinPadding" />
  <span v-hello:ye="hello">{{ hello.say }}woqunimd</span>
</template>

<style scoped></style>
