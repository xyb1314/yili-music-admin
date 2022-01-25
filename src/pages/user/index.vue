<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn push color="white" text-color="primary" label="添加用户" />
    </div>
    <q-table
      title="用户列表"
      title-class="my-special-class"
      :rows="data"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      hide-pagination
    />

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { search } from '../../api/users.js'

export default {
  name: 'index',
  setup() {
    const columns = [
      {
        field: 'id',
        label: 'ID',
        align: 'center'
      },
      {
        field: 'username',
        label: '用户名',
        align: 'center'
      },
      {
        field: 'nickname',
        label: '昵称',
        align: 'center'
      }
    ]

    const rows = []
    const data = ref([])

    const fetchData = () => {
      search({ page: 0 }).then(res => {
        console.log(res.data)
        data.value = data.value.concat(res.data.content)
        data.value.forEach(user => {
          if (user.nickname === null) return (user.nickname = '无')
        })
        pagination.value.page = res.data.totalPages
        pagination.value.rowsPerPage = res.data.size
        pagination.value.rowsNumber = res.data.totalElements
      })
    }

    fetchData()

    const pagination = ref({
      page: 2,
      rowsPerPage: 10,
      rowsNumber: 10
    })

    return {
      pagination,
      columns,
      rows,
      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
      data
    }
  }
}
</script>

<style scoped lang="css">
.q-table__title {
  font-size: 30px;
  letter-spacing: 0.005em;
  font-weight: 400;
  color: #26a69a;
}
</style>
