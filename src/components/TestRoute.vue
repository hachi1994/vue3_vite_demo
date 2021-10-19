<script setup>
import { fetchHello } from "@/api/index";
import { ref, onMounted, defineProps, reactive } from "vue";
let msg = ref("");
let o = reactive({ age: 1 });
defineProps({
  id: String,
});
onMounted(() => {
  fetchHello().then((r) => {
    msg.value = r.data;
  });
});
</script>
<template>
  <div>{{ msg }}{{ id }}{{ o }}</div>
</template>
