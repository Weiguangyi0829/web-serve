<template>
  <div>
    <Layout
      :style="{minHeight: '100vh'}"
      theme="light"
    >
      <Sider
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <Menu
          :open-names="opennames"
          ref="leftmenu"
          @on-select="isCollapsed=false"
          @on-open-chan
          ge="isCollapsed=false"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <router-link to="/help">
            <MenuItem name="1">
            <Icon type="md-help" />
            <span>帮助中心</span>
            </MenuItem>
          </router-link>
          <Submenu name="2">
            <template slot="title">
              <Icon type="md-document" />
              <span>文章</span>
            </template>
            <router-link to="/all">
              <MenuItem name="2-1">所有文章</MenuItem>
            </router-link>
            <router-link to="/article">
              <MenuItem name="2-2">写文章</MenuItem>
            </router-link>
            <MenuItem name="2-3">xxx（爬虫）</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="md-list" />
              <span>快讯</span>
            </template>
            <MenuItem name="3-1">所有通知</MenuItem>
            <MenuItem name="3-2">写发布通知</MenuItem>
          </Submenu>
          <router-link to="/comment">
            <MenuItem name="4">
            <Icon type="md-text" />
            <span>评论</span>
            </MenuItem>
          </router-link>

          <Submenu name="5">
            <template slot="title">
              <Icon type="md-person" />
              <span>专家管理</span>
            </template>
            <MenuItem name="5-1">专家考核设定</MenuItem>
            <MenuItem name="5-2">专家资料管理</MenuItem>
          </Submenu>
          <Submenu name="6">
            <template slot="title">
              <Icon type="md-trending-up" />
              <span>培训管理</span>
            </template>
            <MenuItem name="6-1">会员管理</MenuItem>
            <MenuItem name="6-2">缴费情况</MenuItem>
          </Submenu>
          <MenuItem name="7">
          <Icon type="md-filing" />
          <span>项目管理</span>
          </MenuItem>
          <MenuItem name="8">
          <Icon type="ios-folder-open" />
          <span>内部文件管理</span>
          </MenuItem>
          <MenuItem name="9">
          <Icon type="md-settings" />
          <span>设置</span>
          </MenuItem>
        </Menu>
      </Sider>

      <BackTop></BackTop>
    </Layout>
  </div>

</template>
<style lang="less">
@import "../../less/index.less";
@import "../../less/my.less";
</style>
<script>
export default {
  name: "sideBar",
  data() {
    return {
      opennames: ["1"],
      isCollapsed: false
    };
  },
  methods: {
    getMsgFromChild(title) {
      this.itemTitle = title;
    }
  },
  watch: {
    isCollapsed(val) {
      if (val) {
        this.opennames = [];
        this.$nextTick(() => {
          this.$refs.leftmenu.updateOpened();
        });
      }
    }
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>