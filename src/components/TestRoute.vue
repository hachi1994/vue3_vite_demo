<script setup>
import { fetchHello, fetchJSONData } from "@/api/index";
import { ref, onMounted, defineProps, reactive, useCssModule } from "vue";
import { defineComponent } from "vue/dist/vue.esm-bundler.js";
const styles = useCssModule();
let msg = ref("");
let searchText = ref("init");
let helo = ref(null);
let o = reactive({ age: 1 });
let style_1 = reactive({ color: "red" });
let redClass = ref(styles.red);
defineProps({
  id: String,
});
// fetch("/api/getJsonData").then((r) => {
//   //r.text().then((r) => console.log(r));
//   r.json().then((r) => (searchText.value = JSON.stringify(r)));
// });
const HelloWorld = defineComponent({
  props: ["msg", "modelValue"],
  emits: ["update:modelValue"],
  template: `<input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" type="text"/>`,
});
onMounted(() => {
  setTimeout(() => {
    console.log(helo.value.$el.value, 456);
  }, 5000);
});
async function click() {
  searchText.value = "yo";
}
async function init() {
  let r1 = await fetchHello();
  let r2 = await fetchJSONData();
  r1.status === 200 ? (msg.value = r1.data) : "noData";
  r2.status === 200
    ? r2.json().then((r) => (searchText.value = JSON.stringify(r)))
    : "noData";
}
init();
</script>
<template>
  <div :class="redClass" :style="[style_1]" @click="click">{{ msg }}{{ id }}{{ o }}</div>
  <HelloWorld v-model="searchText" ref="helo" :msg="msg" />
  {{ searchText }}
</template>
<style module>
.red {
  font-size: 20px;
}
</style>
