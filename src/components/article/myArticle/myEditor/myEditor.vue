<template>
  <Row>
    <Col span="20">
    <Card>
      <div style="min-height: 600px; ">
        <Alert
          type="success"
          show-icon
        >发布成功</Alert>
        <Alert
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
        </div>
      </div>
    </Card>
    </Col>
    <Col span="4">
    <Collapse v-model="value1">
      <Panel name="1">
        文章分类
        <div slot="content">
          <span>状态：</span>
          <Select
            v-model="model2"
            size="small"
            style="width:100px"
          >
            <Option
              v-for="item in optionList"
              :value="item.value"
              :key="item.value"
            >{{ item.label }}</Option>
          </Select></div>

      </Panel>
      <Panel name="2">
        文章置顶设置
        <Checkbox
          slot="content"
          v-model="up"
        ><span class="ml-2">置顶</span></Checkbox>
      </Panel>
      <Panel name="3">
        备注
          <Input
          slot="content"
            type="textarea"
            v-model="formData.desc"
            :rows="4"
            placeholder="..."
          />
      </Panel>
    </Collapse>
    </Col>

  </Row>
</template>
<style lang="less" scoped>
@import "../../less/my.less";

.send {
  display: none;
}
</style>
<script>
import E from "wangeditor";
// import bus from "../../articleBus.js";
export default {
  name: "myEditor",
  data() {
    return {
      value1: [1, 2, 3],
      value3: false,
      editorContent: "",
      input1: "",
      get: true,
      unget: true,
      imgUrl: "",
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static"
      },
      optionList: [
        {
          value: "草稿",
          label: "草稿"
        },
        {
          value: "发布",
          label: "发布"
        }
      ],
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
    // editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.uploadImgServer = "";
    editor.customConfig.customUploadImg = function(files, insert) {
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法

      // 上传代码返回结果之后，将图片插入到编辑器中
      insert(imgUrl);
      console.log(imgUrl);
    };
    editor.customConfig.uploadImgParams = {
      // 如果版本 <=v3.1.0 ，属性值会自动进行 encode ，此处无需 encode
      // 如果版本 >=v3.1.1 ，属性值不会自动 encode ，如有需要自己手动 encode
      token: "wdnmdlzb"
    };
    editor.customConfig.uploadImgParamsWithUrl = true;
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  },
  methods: {
    getContent() {
      // bus.Semit("titleMsg", title);
      this.get = !this.get;
    }
  }
};
</script>
