<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="login">
      <van-field
        v-model="user.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="rules.password"
        autocomplete="off"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
        <p class="tip">
          还没账号,去
          <router-link to="/register">注册</router-link>
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
        username: 10010,
        password: 123
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
  created() {
    if (this.$router.params) {
      this.user.username = this.$route.params.username
      this.user.password = this.$route.params.password
    }
  },
  methods: {
    async login() {
      const res = await this.$axios.post('/login', this.user)
      const { statusCode, data, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)
        this.$router.push('/user')
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
