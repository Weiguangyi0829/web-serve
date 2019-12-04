import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index.vue'),
      children: [
        {
          path: '/help',
          name: 'help',
          component: () => import('@/components/help/help'),
          // beforeRouteEnter(to, from, next) {
          //   alert('asdasd')
          //   next();
          // },
        },
        {
          path:'/article',
          name:'myArticle',
          component:()=> import('@/components/article/myArticle/myArticle'),
        },
        {
          path:'/all',
          name:'all',
          component:()=> import('@/components/article/all/all')
        },
      ]
    },

  ]
})
