<template>
  <el-form ref="activities" :data="activities" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="activities.name"></el-input>
    </el-form-item>
    <el-form-item label="活动类型">
      <el-select v-model="activities.category" placeholder="请选择活动类型">
        <el-option label="类型一" value="cunqian"></el-option>
        <el-option label="类型二" value="licai"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="activities.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="activities.date2"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="年利率">
      <el-input v-model="activities.rate"></el-input>
    </el-form-item>
    <el-form-item label="存款额度">
      <el-input v-model="activities.maxNum"></el-input>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="activities.stock"></el-input>
    </el-form-item>
    <el-form-item label="限制">
      <el-input v-model="activities.limit"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="activities.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Manage",
  data() {
    return {
    };
  },
  computed:{
    ...mapState('Activity',['activities'])
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
</style>