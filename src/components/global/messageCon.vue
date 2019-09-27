<template>
  <div class="messageConWapper">
    <div class="messageTitle">
      <div class="messageTitleCon">
        <div class="peoples">
          <div class="peopleImage">
            <img src="static/images/user6.jpg" alt srcset />
          </div>
          <div class="peopleImage">
            <img src="static/images/user7.jpg" alt srcset />
          </div>
          <div class="peopleImage">
            <img src="static/images/user8.jpg" alt srcset />
          </div>
          <div class="peopleAdd">
            <div>+</div>
          </div>
        </div>
        <div class="peopleTitle">Fltness App - A Simple & clean</div>
        <div class="setUp">In Progress</div>
      </div>
    </div>
    <div class="messagePost">
      <div class="tabTitle">
        <div class="titleName titleNameActive">聊天</div>
        <!-- <div class="titleName">聊天</div> -->
      </div>
      <div class="postCon">
        <textarea class="con" placeholder="write a text..."></textarea>
        <div class="bottomOption">
          <div class="sub">
            <div class="icon"></div>
            <div class="file"></div>
          </div>
          <div class="send">Send</div>
        </div>
      </div>
    </div>
    <div class="newsList">
      <div class="news" v-for="(items,index) of newsList" :key="index">
        <div class="timeLine">
          <div class="timeDate">{{items.dayTime}}</div>
        </div>
        <div
          :class="{otherMessage:item.user !='loginUser',mineMessage:item.user == 'loginUser'}"
          v-for="(item,index) of items.messages"
          :key="index"
        >
          <div class="userIcon" v-if="item.user !='loginUser'">
            <img :src="item.userIcon" alt srcset />
          </div>
          <div class="messageCon">
            <div class="message">{{item.message}}</div>
            <div class="messageTime">
              <span>{{item.user}} · {{item.time}}</span>
            </div>
          </div>
          <div class="userIcon" v-if="item.user == 'loginUser'">
            <img :src="item.userIcon" alt srcset />
          </div>
        </div>
        <!-- <div class="mineMessage" v-for="(items,index) of items.messages" :key="index"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'messageCon',
  data() {
    return {
      newsList: [
        {
          dayTime: 'today',
          messages: [
            {
              user: 'loginUser',
              userIcon: 'static/images/user6.jpg',
              message: '这是一条消息',
              time: '7:53 AM'
            },
            {
              user: 'other',
              userIcon: 'static/images/user7.jpg',
              message: '这是一条消息',
              time: '7:53 AM'
            },
            {
              user: 'other',
              userIcon: 'static/images/user8.jpg',
              message: '这是一条消息',
              time: '7:53 AM'
            },
            {
              user: 'other',
              userIcon: 'static/images/user9.jpg',
              message:
                '这是一条超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长超长的消息',
              time: '7:53 AM'
            }
          ]
        }
      ]
    }
  },
  methods: {},
  created() {}
}
</script>

<style lang="less">
.messageConWapper {
  background-color: #eff3f8;
  width: 610px;

  .messageTitle {
    padding: 0 20px;
    height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid rgb(231, 231, 231);
    border-left: none;
    box-sizing: border-box;
    .messageTitleCon {
      display: flex;
      justify-content: space-between;
      height: 28px;
    }
    .peoples {
      display: flex;
      width: 130px;
      justify-content: space-around;
      .peopleImage {
        height: 28px;
        width: 28px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .peopleAdd {
        .peopleImage;
        background-color: #bfc9d7c4;
        flex-direction: column;
        font-size: 20px;
        color: #fff;
        div {
          text-align: center;
        }
      }
    }
    .peopleTitle {
      color: #7ba5fc;
      font-size: 14px;
      font-weight: bold;
    }
    .setUp {
      background-color: #62d862;
      border-radius: 14px;
      line-height: 28px;
      font-size: 12px;
      padding: 0 10px;
      color: #fff;
      font-weight: 800;
    }
  }
  .messagePost {
    padding: 25px;
    .tabTitle {
      background-color: #f8f9fc;
      display: flex;
      height: 40px;
      overflow: hidden;
      justify-content: flex-start;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      border: 1px solid rgb(231, 231, 231);
      box-sizing: border-box;
      .titleName {
        width: 160px;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        border-right: 1px solid rgb(231, 231, 231);
        line-height: 40px;
      }
      .titleNameActive {
        background-color: #fff;
        border-bottom: 2px solid #62d862;
        box-sizing: border-box;
      }
    }
    .postCon {
      background-color: #fff;
      height: 160px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border: 1px solid rgb(231, 231, 231);
      box-sizing: border-box;
      border-top: none;
      position: relative;
      overflow: hidden;
      .con {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 10px 20px;
        line-height: 1.5;
        font-size: 12px;
        font-family: 'Console';
        resize: none;
      }
      .bottomOption {
        // height: 30px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 10px;
        .send {
          height: 30px;
          background-color: #5e93fc;
          color: #fff;
          font-weight: bold;
          width: 80px;
          text-align: center;
          line-height: 30px;
          border-radius: 15px;
          font-size: 12px;
          cursor: pointer;
          &:hover {
            background-color: #4e88fc;
          }
        }
      }
    }
  }
  .newsList {
    padding: 0 25px;
    .timeLine {
      height: 0px;
      outline: 1px solid rgb(231, 231, 231);
      position: relative;
      display: flex;
      justify-content: center;
      .timeDate {
        transform: translateY(-50%);
        height: 20px;
        background-color: #eff3f8;
        padding: 0 20px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 900;
        color: #a4b7d1c4;
      }
    }
    .otherMessage {
      display: flex;
      justify-content: flex-start;
      padding: 0px 20px;
      padding-top: 26px;
      .userIcon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .messageCon {
        max-width: 400px;
        margin-top: -6px;
        display: flex;
        flex-direction: column;
        .message {
          background-color: #dde5ee;
          padding: 15px 20px;
          border-radius: 6px;
        }
        .messageTime {
          color: #a4b7d1c4;
          font-size: 12px;
          span {
            transform: scale(0.95);
          }
        }
      }
    }
    .mineMessage {
      .otherMessage;
      justify-content: flex-end;
      .userIcon {
        margin-right: 0px;
        margin-left: 10px;
      }
      .messageCon {
        .message {
          background-color: #ffffff;
        }
        .messageTime {
          text-align: right;
        }
      }
    }
  }
}
</style>
