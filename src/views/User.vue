<template>
  <div class="user">
    <hm-header>用户详情</hm-header>
    <div class="top">
      <div class="avatra">
        <img :src="$axios.defaults.baseURL+ user.head_img" alt />
      </div>
      <div class="name">
        <div class="nickname">
          <span class="iconfont iconxingbienan"></span>
          <span>{{user.nickname}}</span>
        </div>
        <div class="time">{{user.create_date | time}}</div>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  async created() {
    const id = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${id}`)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    }
  }
}
</script>

<style lang='less' scoped >
.top {
  display: flex;
  align-items: center;
  padding: 0 20px;
  .avatra {
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  .name {
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
    .name {
      margin-left: 10px;
      .iconxingbienan {
        font-size: 16px;
        color: blue;
      }
      .iconxingbienv {
        font-size: 16px;
        color: pink;
      }
    }
    .time {
      margin-top: 5px;
      font-size: 14px;
      color: gray;
    }
    .arrow {
      .iconjiantou1 {
        font-size: 16px;
      }
    }
  }
}
</style>
