<template>
    <Content :style="{padding: '0 50px'}">
      <Breadcrumb :style="{margin: '20px 0'}">
      </Breadcrumb>
      <Card>
        

          <article-item @titleMessage="getMessage"></article-item>


      </Card>
    </Content>
</template>

<script>
import articleItem from "../all/articleItem/articleItem.vue";
export default {
  name: "all",
  components: { articleItem },
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
</style>