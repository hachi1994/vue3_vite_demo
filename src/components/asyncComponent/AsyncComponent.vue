<script setup>
import { defineComponent } from "vue";
</script>
<script>
import { defineAsyncComponent } from "vue/dist/vue.esm-bundler.js";
import ChildOne from "./Child_one.vue";
import axios from "axios";
export default {
  mounted() {
    let { childone } = this.$refs;
    console.log(childone, this);
    childone.say();
  },
  components: {
    Child: defineAsyncComponent(() => {
      return new Promise((resolve, reject) => {
        resolve({
          template: "1234",
        });
      });
    }),
  },
  data() {
    return {
      num: 1,
    };
  },
  provide: {
    qcd: "234",
  },
};
</script>
<template>
  <Child />
  <ChildOne :num="num" ref="childone" />
  {{ num }}
</template>

<style scoped></style>
