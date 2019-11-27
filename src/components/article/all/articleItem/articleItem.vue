<template>
  <div>
    <div>
      <Dropdown>
        <Button type="primary">
          所有类型
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem>
            草稿
          </DropdownItem>
          <DropdownItem>
            已发布
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <DatePicker
        type="date"
        :options="options3"
        placeholder="选择日期"
        style="width: 200px"
      ></DatePicker>
      <div class="fr"> <Input
          search
          enter-button="搜索"
        /></div>

    </div>
    <div class="pt-2">
      <Table
        ref="selection"
        :data="tableData1"
        :columns="tableColumns1"
        stripe
      ></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page
            :total="50"
            :current="1"
            @on-change="changePage"
          ></Page>
        </div>
      </div>
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
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "作者",
          key: "name"
        },
        {
          title:'发布状态',
          key: "push"
        },
        {
          title: "People",
          key: "people",
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  trigger: "hover",
                  title: params.row.people.length + "customers",
                  placement: "bottom"
                }
              },
              [
                h("Tag", params.row.people.length),
                h(
                  "div",
                  {
                    slot: "content"
                  },
                  [
                    h(
                      "ul",
                      this.tableData1[params.index].people.map(item => {
                        return h(
                          "li",
                          {
                            style: {
                              textAlign: "center",
                              padding: "4px"
                            }
                          },
                          item.n + "：" + item.c + "People"
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: "发布日期",
          key: "update",
          render: (h, params) => {
            return h(
              "div",
              this.formatDate(this.tableData1[params.index].update)
            );
          }
        }
      ]
    };
  },
  methods: {
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name: "Business" + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ["City", "People", "Cost", "Life", "Entertainment"],
          people: [
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: "People" + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        });
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.tableData1 = this.mockTableData1();
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