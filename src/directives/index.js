/* import Vue from 'vue'
Vue.directive('imgerror', {
  inserted (el, binding) {
    el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
  },
  // 数据更新的时候执行一次
  update (el, binding) {
    el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
  }
}) */
export const imgerror = {
  update (el, binding) {
    el.onerror = function () {
      el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  }
}

