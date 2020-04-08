import Vue from 'vue'
import Router from 'vue-router'
// import { getStore } from '@/utils/store'
// 首页模块
import home from './home'
// 用户模块
import user from './user'
// 登录模块
import login from './login'
// 转账模块
import transfer from './transfer'

Vue.use(Router)
// 配置路由
const RouterModel = new Router({
  routes: [...home, ...user, ...login, ...transfer]
})
// 路由拦截器
RouterModel.beforeEach((to, from, next) => {
  // const Authorization=getStore({ name: 'Authorization' })
  // if (!Authorization) {
  //   if (to.meta.login) {
  //     next({ name: 'login', query: { redirect: to.name } });
  //     return;
  //   }
  // }
  next()
})

export default RouterModel
