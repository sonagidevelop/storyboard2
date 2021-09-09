import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Notice from '../views/Notice.vue'
import SurveyList from '../views/SurveyList.vue'
import Login from '../components/Login.vue'
import NoticeItem from '../components/NoticeItem.vue'
import NoticeDetail from '../components/NoticeDetail.vue'
import SurveyDetail from '../components/SurveyDetail.vue'
import SurveyUpload from '../components/SurveyUpload.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/noticedetail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/surveylist',
    name: 'SurveyList',
    component: SurveyList
  },
  {
    path: '/surveydetail',
    name: 'SurveyDetail',
    component: SurveyDetail
  },
  {
    path: '/surveyupload',
    name: 'SurveyUpload',
    component: SurveyUpload
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/notice',
    name: 'NoticeItem',
    component: NoticeItem,
    props:true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
