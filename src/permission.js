import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
// vip白名单 直接放行
const whiteList = ['/login', '/404']
// 前置路由守卫
router.beforeEach((to, from, next) => {
  // to去哪里 from来自哪里 next放行
  // 开启进度条效果
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    // 如果登陆过了，就不再去登录了，直接去后台首页
    if (to.path === '/login') {
      next('/')
    } else {
      if (store.state.user.userInfo.id) {
        // 这块ajax只发一次，优化了一下
        // 当用户手里有token并且访问的不是登录页面，那就请求个人资料
        store.dispatch('user/getInfo')
      }

      next()// 放行
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})
// 后置路由守卫
router.afterEach(() => {
  // 关闭进度条效果
  NProgress.done()
})
