<template>
  <Content :style="{padding: '0 50px'}">
    <Breadcrumb :style="{margin: '20px 0'}">
      <BreadcrumbItem>全部</BreadcrumbItem>
      <BreadcrumbItem>草稿</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <my-editor></my-editor>
    </Card>

  </Content>
</template>
<style lang="less">
@import "../less/article.less";
@import "../less/my.less";
</style>
<script>
import myEditor from "./myEditor/myEditor.vue";
export default {
  name: "myArticle",
  components: {
    myEditor,
  },
  methods: {}
};
</script>