<template>
  <Header class="bgc-black">
    <Menu
      mode="horizontal"
      active-name="1"
      class="bgc-black"
    >
      <div class="layout-nav">
        <MenuItem
          name="1"
          class="h-icon"
        >
        <Icon type="md-home" />
        <span class="f-s-19px">Home</span>
        </MenuItem>
        <MenuItem
          name="2"
          class="h-icon"
        >
        <Icon type="md-refresh" />
        </MenuItem>
        <div class="fr ">
          <MenuItem
            name="3"
            class="h-icon"
          >
          <Avatar
            icon="ios-person"
            size="large"
          />
          </MenuItem>
        </div>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../../less/index.less";
@import "../../less/my.less";
</style>