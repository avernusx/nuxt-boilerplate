import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(app) {
  let req = app ? app.req : null
  let router = new Router({
    mode: 'history',
    routes: [],
  })

  router.beforeEach(function (to, from, next) {
    if (typeof (window) != 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    next()
  })

  router.addRoutes([
    {
      path: '/',
      component: () => import('./pages/index').then(cmp => cmp.default || cmp),
      name: 'index',
    },
  ])

  return router
}
