<script setup></script>
<script>
export default {
  mounted() {
    console.log(this.$attrs, 2345);
  },
  data() {
    return {
      msg: "子组件1",
    };
  },
  inject: ["qcd"],
  methods: {
    say() {
      this.msg = "子组件件1";
    },
  },
};
</script>
<template>
  <h1>{{ msg }}{{ qcd }}</h1>
</template>

<style scoped></style>
