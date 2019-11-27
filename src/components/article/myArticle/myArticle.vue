<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
    </Breadcrumb>
    <my-editor></my-editor>
  </Content>
</template>
<style lang="less">
@import "../less/my.less";
</style>
<script>
import myEditor from "./myEditor/myEditor.vue";
export default {
  name: "myArticle",
  components: {
    myEditor
  },
  methods: {}
};
</script>