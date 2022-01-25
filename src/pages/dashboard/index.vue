<template>
  <div>welcome {{ nickname }}</div>
  <q-btn @click="logout">退出登录</q-btn>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  setup() {
    const store = useStore()
    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () =>
        store.dispatch('user/logout').then(() => window.location.reload())
    }
  }
}
</script>

<style scoped></style>
