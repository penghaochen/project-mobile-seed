<template>
  <div id="app">

    <router-view name="navBar"/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="view-router"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="view-router"/>
    <router-view name="tabbar"/>
  </div>
</template>

<style lang="scss" src="./assets/scss/global.scss" />
