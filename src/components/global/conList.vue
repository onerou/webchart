<template>
  <div class="conListWapper">
    <div class="contitle">
      <div class="text">Your Chats</div>
    </div>
    <div class="option">
      <div class="screen">
        <span>筛</span>
      </div>
      <div class="select">
        <span>下拉</span>
      </div>
    </div>
    <div class="sessionList">
      <div class="session" v-for="(item,index) of messageList" :key="index">
        <div class="typeStatus">
          <div class="type">{{item.type}}</div>
          <div class="status"></div>
        </div>
        <div class="userInfo">
          <div class="icon">
            <img src="http://placehold.it/40x40" alt srcset />
          </div>
          <div class="info">
            <div class="userName">{{item.userName}}</div>
            <div class="autograph">{{item.autograph}}</div>
          </div>
          <div class="timeNumber">
            <div class="time">{{item.time}}</div>
            <div class="numberCon">
              <div class="number" v-show="item.messageNumber>0">{{item.messageNumber}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'conList',
  data() {
    return {
      messageList: [
        {
          userName: 'chatUser',
          time: '7:30 AM',
          type: 'friend',
          autograph: '这是个性签名',
          messageNumber: 25
        },
        {
          userName: 'chatUser',
          time: '7:30 AM',
          type: 'friend',
          autograph: '这是个性签名',
          messageNumber: 25
        },
        {
          userName: 'chatUser',
          time: '7:30 AM',
          type: 'friend',
          autograph: '这是个性签名',
          messageNumber: 25
        },
        {
          userName: 'chatUser',
          time: '7:30 AM',
          type: 'friend',
          autograph: '这是个性签名',
          messageNumber: 25
        },
        {
          userName: 'chatUser',
          time: '7:30 AM',
          type: 'friend',
          autograph: '这是个性签名',
          messageNumber: 25
        }
      ]
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="less">
.conListWapper {
  height: 100%;
  width: 280px;
  background-color: #fff;
  border: 1px solid rgb(231, 231, 231);
  border-top: none;
  .contitle {
    width: 100%;
    height: 70px;
    padding: 24px 20px;
    border-top: 1px solid rgb(231, 231, 231);
    .text {
      font-size: 16px;
      font-weight: bold;
      color: black;
    }
  }
  .option {
    height: 50px;
    width: 100%;
    background-color: #f8fafc;
    display: flex;
    justify-content: space-between;
    outline: 1px solid rgb(231, 231, 231);
    box-sizing: border-box;
    padding: 0 20px;
    .screen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        background-color: #8d9dbb;
      }
    }
    .select {
      .screen;
    }
  }
  .sessionList {
    .session {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 140px;
      padding: 20px;
      border-bottom: 1px solid rgb(231, 231, 231);
      .typeStatus {
        display: flex;
        justify-content: space-between;
        .type {
          color: #7ba5fc;
          font-size: 14px;
          font-weight: bold;
        }
        .status {
          height: 8px;
          width: 8px;
          border-radius: 50%;
          background-color: #62d862;
        }
      }
      .userInfo {
        display: flex;
        justify-content: space-around;
        height: 60px;
        .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          // margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info {
          width: 130px;
          color: black;
          .userName {
            font-weight: bold;
            font-size: 14px;
          }
          .autograph {
            font-size: 12px;
            line-height: 2;
          }
        }
        .timeNumber {
          width: 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .time {
            font-size: 12px;
            transform: scale(0.9);
          }
          .number {
            height: 22px;
            width: 22px;
            float: right;
            background-color: #f65f89;
            border-radius: 50%;
            overflow: hidden;
            text-align: center;
            line-height: 23px;
            font-size: 12px;
            transform: scale(0.85);
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

