<template>
  <div class="peopleInfoWapper">
    <div class="peopleTitle">
      <div class="userIcon">
        <img src="static/images/user6.jpg" alt />
      </div>
      <div class="userName">
        <div class="name">Matthew McConaughey</div>
      </div>
    </div>
    <div class="infoRow">
      <div class="name">图灵机器人</div>
      <div class="button">
        <Switch v-model="botSwitch" @on-change="botSwitchChange" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'peopleInfo',
  data() {
    return { botSwitch: false }
  },
  methods: {
    botSwitchChange(status) {
      console.log('TCL: methods:{botSwitchChange -> status', status)
    }
  },
  created() {}
}
</script>

<style lang="less">
.peopleInfoWapper {
  background-color: #dde5ee;
  width: 280px;
  height: 100%;
  .peopleTitle {
    display: flex;
    background-color: #eff3f8;
    justify-content: flex-start;
    padding: 15px;
    height: 70px;
    .userIcon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .userName {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 900;
      text-align: left;
      width: 200px;
    }
  }
  .infoRow {
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid rgb(231, 231, 231);
  }
}
</style>
