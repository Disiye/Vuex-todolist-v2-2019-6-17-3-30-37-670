import Vue from 'vue'
import Router from 'vue-router'
import todoHtml from './../components/todoHtml.vue'
import Welcome from './../view/welcome.vue'
import Home from './../view/home.vue'
import helloName from './../view/helloName.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/welcome',
      name:'Welcome',
      component:Welcome
    },
    {
      path:'/home/:name',
      name:'Home',
      props:true,
      component:Home,
      children:[
        {
          path: 'todoHtml',
          name: 'todoHtml',
          component: todoHtml
        },
        {
          path:'helloName',
          name:'helloName',
          props:true,
          component:helloName
        }
      ]
    }
  ]
})