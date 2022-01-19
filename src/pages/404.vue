<template>
  <div class="page">
    <div class="error_code">404</div>
    <div class="tips">你访问的页面不存在！</div>
    <div class="action_area">
      <q-btn
        color="deep-orange"
        glossy
        label="首页"
        @click="
          () => {
            $router.push('/')
          }
        "
      />
      <q-btn
        color="secondary"
        outline
        label="back↩"
        @click="
          () => {
            $router.back()
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped lang="less">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error_code {
    font-size: 300px;
    line-height: 350px;
  }
  .tips {
    color: darkgray;
    margin-bottom: 60px;
  }
  .action_area {
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
