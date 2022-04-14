<template>
  <div class="search-wrapper" @click.stop>
    <div
      class="search-input"
      :class="{
        'is-focus': isFocus,
      }"
    >
      <!-- 搜索输入框 -->
      <input
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        autofocus
        v-model="value"
        ref="searchInput"
        spellcheck="false"
        placeholder="搜索..."
        @click="changeInput"
        @keyup="clickSearch"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
      />

      <!-- 搜索放大镜图标 -->
      <div class="search-icons">
        <i class="el-icon-close" v-show="value" @click="clearSearchValue"></i>
        <i class="el-icon-search" v-show="!value" @click="clickSearch"></i>
      </div>
    </div>
    <!-- 搜索下拉列表 -->
    <div class="search-list">
      <div class="search-result" ref="ul">
        <ul v-for="item in result" :key="item">
          <li
            class="select-li"
            :class="{
              'is-selected': item.isSelected,
            }"
            @click="clickResultItem(item)"
          >
            <!-- <img class="user-avatar" src="../../images/avatar.png" /> -->
            <div class="user-name">
              <span
                >{ {item.keyword[0]}}<span class="keyword"
                  >{ {item.keyword[1]}}</span
                >{ {item.keyword[2]}}</span
              >
            </div>
          </li>
        </ul>

        <!-- 查询结果为空时候 -->
        <div class="result-null" v-if="value && result.length == 0">
          没有结果
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PinyinMatch from 'pinyin-match';
export default {
  name: "Search",
  data() {
    return {
      isFocus: false, //搜索框是否获取了焦点
      value: "", //输入的搜索关键字
      result: [], //全部搜索结果
      curIndex: 0, //选中的搜索结果的下标
      selectItem: {}, //选中的搜索结果
      userList: [
        {
          name: "安其拉",
          id: "a1",
        },
        {
          name: "安琪",
          id: "a2",
        },
        {
          name: "陈仙仙",
          id: "c1",
        },
        {
          name: "成小龙",
          id: "c2",
        },
        {
          name: "程野",
          id: "c3",
        },
        {
          name: "丁小明",
          id: "d1",
        },
        {
          name: "丁小龙",
          id: "d2",
        },
        {
          name: "丁小野",
          id: "d3",
        },
        {
          name: "冯小明",
          id: "f1",
        },
        {
          name: "冯小龙",
          id: "f2",
        },
        {
          name: "冯小野",
          id: "f3",
        },
        {
          name: "高小明",
          id: "g1",
        },
        {
          name: "高小龙",
          id: "g2",
        },
        {
          name: "高小野",
          id: "g3",
        },
        {
          name: "高小阳",
          id: "g4",
        },
        {
          name: "郭小名",
          id: "g5",
        },
        {
          name: "黄小明",
          id: "h1",
        },
        {
          name: "黄小龙",
          id: "h2",
        },
        {
          name: "黄小野",
          id: "h3",
        },
        {
          name: "郝小阳",
          id: "h4",
        },
        {
          name: "郝小名",
          id: "h5",
        },
        {
          name: "李小明",
          id: "l1",
        },
        {
          name: "李小龙",
          id: "l2",
        },
        {
          name: "李小野",
          id: "l3",
        },
        {
          name: "李小阳",
          id: "l4",
        },
        {
          name: "李小一",
          id: "l5",
        },
        {
          name: "李小二",
          id: "l6",
        },
        {
          name: "李小三",
          id: "l7",
        },
        {
          name: "李小四",
          id: "l8",
        },
        {
          name: "李小五",
          id: "l9",
        },
      ],
    };
  },
  mounted() {
    let that = this;
    document.body.addEventListener(
      "click",
      () => {
        //单击组件之外时收起下拉列表
        that.isFocus = false;
        that.value = "";
      },
      false
    );
  },
  methods: {
    changeInput() {
      //单击搜索框时获取焦点
      this.isFocus = true;
    },
    clearSearchValue() {
      //清空输入的查询条件
      if (this.value) {
        this.value = ""; //搜索关键字
        this.result = []; //全部搜索结果
        this.curIndex = 0; //选中的搜索结果的下标
        this.selectItem = {}; //选中的搜索结果
        this.$refs.searchInput.focus(); //输入查询条件清空后获取焦点
      }
    },
    clickSearch() {
      //查询
      if (event.code == "ArrowDown" || event.code == "ArrowUp") {
        //上下键
        return;
      }
      if (event.code == "Enter" && this.selectItem) {
        this.clickResultItem(this.selectItem); //有搜索结果时按下enter直接选中第一项
        return;
      }
      this.result = []; //全部搜索结果
      this.curIndex = 0; //选中的搜索结果的下标
      this.selectItem = {}; //选中的搜索结果
      if (this.value.trim()) {
        for (let i = 0; i < this.userList.length; i++) {
          //根据所有人员名字匹配
          let name = this.userList[i].name;
          let search = PinyinMatch.match(name, this.value);
          if (search && search.length > 0) {
            this.userList[i].keyword = this.getKeyWord(name, search);
            this.userList[i].isSelected = false;
            this.result.push(this.userList[i]);
          }
        }
        if (this.result && this.result[0]) {
          this.result[0].isSelected = true;
          this.curIndex = 0; //选中的搜索结果的下标
          this.selectItem = this.result[0]; //选中的搜索结果
        }
      } else {
        this.$refs.searchInput.focus(); //没有输入查询条件焦点不应该失去
      }
    },
    getKeyWord(name, search) {
      //关键字
      let keyword = [];
      keyword[0] = name.substring(0, search[0]);
      if (search[0] == search[1]) {
        keyword[1] = name.charAt(search[0]); //匹配到的作为关键字
        keyword[2] = name.substring(search[0] + 1);
      } else {
        keyword[1] = name.substring(search[0], search[1] + 1); //匹配到的作为关键字
        keyword[2] = name.substring(search[1] + 1);
      }
      return keyword;
    },
    clickResultItem(data) {
      //单击下拉列表中的选项
      alert("您选择了" + data.name);
    },
    navigateOptions(direction) {
      //搜索结果上下键选择
      let resultLength = this.result.length;
      if (resultLength == 0 || resultLength == 1) {
        return;
      }
      let lastIndex = this.curIndex;
      if (direction === "next") {
        //向下
        this.curIndex++;
        if (this.curIndex === resultLength) {
          this.curIndex = 0;
        }
      }
      if (direction === "prev") {
        //向上
        this.curIndex--;
        if (this.curIndex < 0) {
          this.curIndex = resultLength - 1;
        }
      }
      if (lastIndex < resultLength) {
        this.result[lastIndex].isSelected = false;
      }
      if (-1 < this.curIndex < resultLength) {
        this.selectItem = this.result[this.curIndex];
        this.selectItem.isSelected = true;

        // this.result[this.curIndex].isSelected = true;
        this.$set(this.result, this.curIndex, this.selectItem);
      }
      this.resetScrollTop();
    },
    resetScrollTop() {
      //设置滚动条的位置
      let maxShowCount = this.$refs.ul.clientHeight / 50;
      let diff = this.curIndex - maxShowCount;
      diff += 4;
      this.$refs.ul.scrollTop = diff * 50 + 60;
    },
  },
};
</script>
<style scoped>
    
</style>