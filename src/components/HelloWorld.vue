<script setup>
import { ref, onMounted, watch } from "vue";
//import { ElButton } from "element-plus";
import axios from "axios";
defineProps({
  msg: String,
});
const emits = defineEmits(["qc"]);
const count = ref(0);
const arr = ref([1, 2, 3]);

async function getR() {
  return axios.get("/api/helloworld");
}
function foc() {
  arr.value++;
}
onMounted(async function () {
  let a = await getR();
  count.value = a.data;
  emits("qc");
});
watch(count, (n, o) => [console.log(n, o)]);
</script>
<template>
  <li @click="foc" v-for="(item, index) in arr" :key="index">{{ item }}</li>
  <el-button @click="emits('qc')" type="primary">{{ count }}</el-button>
  <slot name="header" :age="count"></slot>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
