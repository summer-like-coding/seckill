<template>
  <div class="container">
    <el-descriptions class="margin-top" :column="3" border>
      <el-descriptions-item>
        <template slot="label">
          <!-- <i class="el-icon-user"> </i> -->
          <el-row class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block">
                  <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div class="block" v-for="size in sizeList" :key="size">
                  <el-avatar :size="size" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        苏州市
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag>学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        江苏省苏州市吴中区吴中大道 1188 号
      </el-descriptions-item>
    </el-descriptions>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="activity" label="参与活动"></el-table-column>
      <el-table-column prop="number" label="购买数量"> </el-table-column>
      <el-table-column prop="Iscredit" label="是否赊账"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:"Imessage",
  data() {
    return {
      circleUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.nfC2tVNM9TgwQ5QuqECd6wHaFj?w=213&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      tableData: [
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: "是",
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: "是",
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: "是",
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: "是",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-table {
  margin-top: 15px;
  height: 400px;
}
</style>