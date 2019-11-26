<template>
  <div>
    <div>
      <Dropdown>
        <Button type="primary">
          批量操作
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem >
            <div @click="handleSelectAll(true)">全选</div>
          </DropdownItem>
          <DropdownItem>
            <div @click="handleSelectAll(false)">反选</div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <Button type="primary">
          所有类型
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem>
            全选
          </DropdownItem>
          <DropdownItem>
            反选
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <DatePicker
        type="date"
        :options="options3"
        placeholder="Select date"
        style="width: 200px"
      ></DatePicker>
      <div class="fr"> <Input
          search
          enter-button="搜索"
          placeholder="..."
        /></div>

    </div>
    <div class="pt-2">
      <Table
        border
        ref="selection"
        :columns="columns4"
        :data="data1"
      ></Table>
    </div>
    <div class="f-direction pt-2">
      <Page :total="50" />
    </div>
  </div>

</template>

<script>
export default {
  name: "articleItem",
  data() {
    return {
      indeterminate: true,
      checkAll: false,
      counter: [
        {
          title: "",
          content: ""
        }
      ],
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "标题",
          key: "title"
        },
        {
          title: "作者",
          key: "author"
        },
        {
          title: "类型",
          key: "categories"
        },
        {
          title: "日期",
          key: "date"
        }
      ],
      data1: [
        {
          title: "John Brown",
          author: 18,
          categories: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          title: "Jim Green",
          author: 24,
          categories: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          title: "Joe Black",
          author: 30,
          categories: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          title: "Jon Snow",
          author: 26,
          categories: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  },
  mounted() {
    this.$fetch("").then(response => {
      console.log(response);
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../less/my.less";
</style>