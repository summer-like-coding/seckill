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
    <el-table :data="tableData" border style="width: 100%" class="footer">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="activity" label="参与活动" width="180">
      </el-table-column>
      <el-table-column prop="number" label="购买数量"> </el-table-column>
      <el-table-column prop="Iscredit" label="是否赊账"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      tableData: [
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: '是',
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: '是',
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: '是',
        },
        {
          date: "2016-05-02",
          activity: "余额宝",
          number: 100,
          Iscredit: '是',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 80%;
  margin: 0 auto;
}
.footer {
  margin-top: 15px;
  height: 400px;
}
</style>