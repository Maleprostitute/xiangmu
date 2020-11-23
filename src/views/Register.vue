<template>
  <div class="register">
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="register">
      <van-field
        v-model="user.username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="rules.username"
        autocomplete="off"
      />
      <van-field
        v-model="user.nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="rules.nickname"
        autocomplete="off"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
        autocomplete="off"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
        <p class="tip">
          已有账号,去
          <router-link to="/login">登录</router-link>
        </p>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        password: [
          { required: true, message: '请填写密码' },
          {
            pattern: /^\d{3,9}$/,
            message: '请输入3-9位的数字',
            trigger: 'onChange'
          }
        ],
        nickname: [
          { required: true, message: '请填写昵称' },
          {
            pattern: /^[\u4e00-\u9fa5]{2,6}$/,
            message: '昵称必须是2-6位的中文',
            trigger: 'onChange'
          }
        ],
        username: [
          { required: true, message: '请填写用户名' },
          {
            pattern: /^\d{5,11}$/,
            message: '请输入5-11位的数字',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async register() {
      const res = await this.$axios.post('/register', this.user)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push({
          name: 'login',
          params: {
            username: this.user.username,
            password: this.user.password
          }
        })
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.tip {
  font-size: 14px;
  text-align: right;
  margin-right: 5px;
  margin-top: 5px;
  a {
    color: red;
  }
}
</style>
