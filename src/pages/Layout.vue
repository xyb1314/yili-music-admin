<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> 圆粒音乐 </q-toolbar-title>
        <q-space />
        <q-avatar color="teal" text-color="white">{{
          nicknameFirstWord
        }}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list padding class="rounded-borders text-primary">
        <q-item
          clickable
          v-ripple
          active-class="menu-active"
          v-for="item in menuRoutes"
          :key="item.meta.title"
          :active="item.name === route.name"
          :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>

          <q-item-section>{{ item.meta.title }} </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { menuRoutes } from '../router'
import { useRoute } from 'vue-router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  setup() {
    const leftDrawerOpen = ref(false)
    const store = useStore()
    const route = useRoute()

    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord']
      ),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menuRoutes,
      route
    }
  }
}
</script>

<style lang="sass">
.menu-active
  color: white !important
  background: #d7d7d7
</style>
