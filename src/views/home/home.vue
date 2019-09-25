<template>
  <div class="homeWapper">
    <div class="container">
      <left-menu></left-menu>
      <con-list></con-list>
      <message-con></message-con>
      <people-info></people-info>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: {},
  computed: {
    ...mapGetters('home', ['getData'])
  },
  methods: {
    ...mapActions('home', ['updateData'])
  },
  beforeCreate() {},
  created() {
    this.$store.dispatch('home/updateData')
  },
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  destroyed() {},
  beforeUpdate() {},
  updated() {}
}
</script>
<style lang="less">
.homeWapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(rgba(212, 212, 212, 0.527), #81bff5a2);
  .container {
    width: 1240px;
    height: 80vh;
    border-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 0 80px 5px rgba(0, 0, 0, 0.274);
    overflow: hidden;
    display: flex;
  }
}
</style>
