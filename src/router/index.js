import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sideBar',
      redirect:'/help',
      component:()=> import('@/components/sideBar'),
      children:[
        {
          path:'/help',
          name:'help',
          component:()=> import('@/components/help/help')
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
        {
          path:'/comment',
          name:'comment',
          component:()=> import('@/components/comment/comment')
        },
        // {
        //   path:'/editor',
        //   name:'myEditor',
        //   component:()=> import('@/components/article/myArticle/myEditor/myEditor')
        // },
      ]
    },     
       
  ]
})
