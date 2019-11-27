<template>
  <div
    :title="itemTitle"
    class="ml-10 mt-2  font-25"
  >{{itemTitle}}</div>
</template>

<script>
export default {
  name: "itemTitle",
  props:["itemTitle"],
  data() {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
@import "../../less/my.less";
</style>