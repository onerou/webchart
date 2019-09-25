<template>
  <div class="leftMenuWapper">
    <div class="logo">tm</div>
    <div class="menuList">
      <div
        class="menuItem"
        :class="{menuActive:menuActive==item.id}"
        v-for="(item) of menuList"
        :key="item.id"
        @click="activeMenu(item)"
      >{{item.con}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leftMenu',
  data() {
    return {
      menuActive: 'people',
      menuList: [
        {
          id: 'people',
          icon: '/',
          con: '好友'
        },
        {
          id: 'setUp',
          icon: '/',
          con: '设置'
        },
        {
          id: 'dateTime',
          icon: '/',
          con: '日历'
        }
      ]
    }
  },
  methods: {
    activeMenu(item) {
      if (item.id == this.menuActive) return
      this.menuActive = item.id
    }
  },
  created() {}
}
</script>

<style lang="less">
.leftMenuWapper {
  height: 100%;
  width: 70px;
  background-color: #4b83f0;
  .logo {
    height: 70px;
    background-color: #2762d4;
    font-size: 20px;
    font-weight: 900;
    color: white;
    text-align: center;
    line-height: 70px;
  }
  .menuList {
    .menuItem {
      height: 70px;
      cursor: pointer;
      &:hover {
        background-color: #5f8ff0;
      }
      text-align: center;
      line-height: 70px;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
    }
    .menuActive {
      background-color: #62d862 !important;
    }
  }
}
</style>
