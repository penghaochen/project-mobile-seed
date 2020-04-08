<template>
  <div id="app">
    <navbar :title="$route.meta.title" :fixed="true"/>
    <div class="content">
      <router-view name="navBar"/>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="view-router"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" class="view-router"/>
      <router-view name="tabbar"/>
    </div>
  </div>
</template>
<script>
import navbar from '@/components/NavBar/'
export default {
  components: {
    navbar: navbar
  },
  data() {
    return {
      title: '登录'
    }
  }
}
</script>
<style lang="scss">
.content{
  margin-top: 50px;
}
</style>
<style lang="scss" src="./assets/scss/global.scss" />
