<template>
  <div class="login-page">
    <q-card class="login-page-content">
      <div class="title">圆粒音乐后台</div>
      <q-form class="q-gutter-md" @submit="onSubmit(username, password)">
        <q-input
          filled
          v-model="username"
          label="用户名："
          lazy-rules
          :rules="[val => (val && val.length > 0) || '请输入用户名：']"
        />

        <q-input
          filled
          v-model="password"
          type="password"
          label="密码："
          lazy-rules
          :rules="[val => (val && val.length > 0) || '请输入密码：']"
        />

        <q-toggle v-model="accept1" label="记住我" />

        <div>
          <q-btn
            label="登录"
            class="full-width"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  setup() {
    const accept1 = ref(false)
    const username = ref('')
    const password = ref('')
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const onSubmit = (username, password) => {
      store.dispatch('user/login', { username, password }).then(() => {
        router.push({ path: route.query.redirect || '/' })
      })
    }

    return { accept1, username, password, onSubmit }
  }
}
</script>

<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-page-content {
    .title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
    }
    width: 400px;
    padding: 20px;
  }
}
</style>
