<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <h6>
    测试自定义指令绑在组件上,指令会绑定在最外层元素上，如果有多个同级的最外层元素，则会爆出warnig在控制台
    <teleport to="#app"> helow </teleport>
  </h6>
</template>

<style scoped></style>
