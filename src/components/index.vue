<template>
  <div class="layout">
    <Layout>
      <top-bar></top-bar>
      <div class="f-row">
        <sideBar></sideBar>
        <div class="w-100">
          <itemTitle></itemTitle>
          <router-view />
        </div>

      </div>
    </Layout>
  </div>
</template>

<script>
import topBar from "./topBar/topBar.vue";
import sideBar from "./sideBar/sideBar.vue";
import itemTitle from "./itemTitle/itemTitle.vue"
export default {
  name: "index",
  components: {
    sideBar,
    topBar
  },
  data() {
    return {
      itemTitle: "帮助中心"
    };
  }
};
</script>

<style lang="less" scoped>
.layout-wrapper,
.layout-outer {
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
</style>