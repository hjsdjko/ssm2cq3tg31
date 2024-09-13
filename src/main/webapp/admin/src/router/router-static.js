import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xueshengxuanke from '@/views/modules/xueshengxuanke/list'
    import shiyanxiangmu from '@/views/modules/shiyanxiangmu/list'
    import shiyanbaogao from '@/views/modules/shiyanbaogao/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import xiangmuyuyue from '@/views/modules/xiangmuyuyue/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import friendlink from '@/views/modules/friendlink/list'
    import forum from '@/views/modules/forum/list'
    import kechengziliao from '@/views/modules/kechengziliao/list'
    import systemintro from '@/views/modules/systemintro/list'
    import xueyuanxinxi from '@/views/modules/xueyuanxinxi/list'
    import shiyanchengji from '@/views/modules/shiyanchengji/list'
    import onlinemessage from '@/views/modules/onlinemessage/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/xueshengxuanke',
        name: '学生选课',
        component: xueshengxuanke
      }
      ,{
	path: '/shiyanxiangmu',
        name: '实验项目',
        component: shiyanxiangmu
      }
      ,{
	path: '/shiyanbaogao',
        name: '实验报告',
        component: shiyanbaogao
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/xiangmuyuyue',
        name: '项目预约',
        component: xiangmuyuyue
      }
      ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
      ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
      ,{
	path: '/friendlink',
        name: '友情链接',
        component: friendlink
      }
      ,{
	path: '/forum',
        name: '在线讨论',
        component: forum
      }
      ,{
	path: '/kechengziliao',
        name: '课程资料',
        component: kechengziliao
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/xueyuanxinxi',
        name: '学院信息',
        component: xueyuanxinxi
      }
      ,{
	path: '/shiyanchengji',
        name: '实验成绩',
        component: shiyanchengji
      }
      ,{
	path: '/onlinemessage',
        name: '在线留言',
        component: onlinemessage
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
