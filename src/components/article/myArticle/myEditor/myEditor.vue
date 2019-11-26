<template>
  <div>
    <div style="min-height: 600px; ">
      <Alert
        :class="{'send' : get}"
        type="success"
        show-icon
      >发布成功</Alert>
      <Alert
        :class="{'send' : unget}"
        type="error"
        show-icon
      >发布失败</Alert>
      <div class="ml-2 ">
        <span>标题：</span>
        <Input
          style="width: 200px"
          v-model="input1"
        />
      </div>
      <div
        class="pt-2"
        ref="editor"
        style="text-align:left"
      >
      </div>
      <div class="fr pt-2">
        <Button
          type="primary"
          @click="value3 = true;"
        >
          <span>发布</span>
        </Button>
        <Drawer
          title="发布信息"
          v-model="value3"
          width="360"
          :closable="false"
          :styles="styles"
        >
          <Form :model="formData">
            <Row :gutter="32">
              <Col span="24">
              <FormItem
                label="Url"
                label-position="top"
              >
                <Input
                  v-model="formData.url"
                  placeholder="url..."
                >
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
                </Input>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="32">
              <Col span="24">
              <FormItem
                label="提交人"
                label-position="top"
              >
                <Select
                  v-model="formData.owner"
                  placeholder="选择用户"
                >
                  <Option value="jobs">Steven Paul Jobs</Option>
                  <Option value="ive">Sir Jonathan Paul Ive</Option>
                </Select>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="32">
              <Col span="24">
              <FormItem
                label="类型"
                label-position="top"
              >
                <Select
                  v-model="formData.type"
                  placeholder="选择文件类型"
                >
                  <Option value="private">个人</Option>
                  <Option value="public">公开</Option>
                </Select>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="32">
              <Col span="24">
              <FormItem
                label="更新日期"
                label-position="top"
              >
                <DatePicker
                  v-model="formData.date"
                  type="daterange"
                  placeholder="请选择日期"
                  style="display: block"
                  placement="bottom-end"
                ></DatePicker>
              </FormItem>
              </Col>
            </Row>
            <FormItem
              label="文章描述"
              label-position="top"
            >
              <Input
                type="textarea"
                v-model="formData.desc"
                :rows="4"
                placeholder="请输入你的描述"
              />
            </FormItem>
          </Form>
          <div class="demo-drawer-footer">
            <Button
              style="margin-right: 8px"
              @click="value3 = false"
            >
              <span>取消</span>
            </Button>
            <Button
              type="primary"
              @click="value3 = false ; getContent();"
            >
              <span>确认发布</span>
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../less/my.less";
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 30%;
  left: 0;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
.send {
  display: none;
}
</style>
<script>
import E from "wangeditor";
import bus from "../../articleBus.js";
export default {
  name: "myEditor",
  data() {
    return {
      value3: false,
      editorContent: "",
      input1: "",
      loading: false,
      loading2: false,
      get: true,
      unget: true,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static"
      },
      formData: {
        url: "",
        owner: "",
        type: "",
        date: "",
        desc: ""
      }
    };
  },

  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.zIndex = 100;
    editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
  methods: {
    getContent() {
      // bus.Semit("titleMsg", title);
      this.get = !this.get;
      axios({
        url: "",
        methods: "get",
        params: {
          title: this.input1,
          content: this.editorContent
        }
      })
        .then(this.getUserInfo)
        .catch(err => {
          alert("发布失败"); 
        });
    }
  }
};
</script>
