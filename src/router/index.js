/**
 *  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 声明使用插件
import Home from '../pages/Home/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //配置所有路由 routes
  routes:[
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
