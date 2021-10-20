<script>
import { h } from "vue";
export default {
  props: {
    level: {
      type: Number,
    },
  },
  created() {
    console.log(this.$slots.default(), 44);
  },
  emits: ["show"],
  render() {
    return h(
      "h" + this.level, // 标签名
      {
        class: "h1",
        onClick: () => {
          this.$emit("show");
        },
      }, // prop 或 attribute
      this.$slots.default() // 包含其子节点的数组
    );
  },
};
</script>
<script setup></script>
