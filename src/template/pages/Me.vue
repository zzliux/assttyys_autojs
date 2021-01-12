<template>
  <div>
    <h1>Me</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$EventBus.$emit("toggleShowNavLeft", false);
  },
};
</script>
