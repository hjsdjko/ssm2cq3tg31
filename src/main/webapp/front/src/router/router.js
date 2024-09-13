import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import xueyuanxinxiList from '../pages/xueyuanxinxi/list'
import xueyuanxinxiDetail from '../pages/xueyuanxinxi/detail'
import xueyuanxinxiAdd from '../pages/xueyuanxinxi/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import kechengziliaoList from '../pages/kechengziliao/list'
import kechengziliaoDetail from '../pages/kechengziliao/detail'
import kechengziliaoAdd from '../pages/kechengziliao/add'
import xueshengxuankeList from '../pages/xueshengxuanke/list'
import xueshengxuankeDetail from '../pages/xueshengxuanke/detail'
import xueshengxuankeAdd from '../pages/xueshengxuanke/add'
import shiyanxiangmuList from '../pages/shiyanxiangmu/list'
import shiyanxiangmuDetail from '../pages/shiyanxiangmu/detail'
import shiyanxiangmuAdd from '../pages/shiyanxiangmu/add'
import xiangmuyuyueList from '../pages/xiangmuyuyue/list'
import xiangmuyuyueDetail from '../pages/xiangmuyuyue/detail'
import xiangmuyuyueAdd from '../pages/xiangmuyuyue/add'
import shiyanbaogaoList from '../pages/shiyanbaogao/list'
import shiyanbaogaoDetail from '../pages/shiyanbaogao/detail'
import shiyanbaogaoAdd from '../pages/shiyanbaogao/add'
import shiyanchengjiList from '../pages/shiyanchengji/list'
import shiyanchengjiDetail from '../pages/shiyanchengji/detail'
import shiyanchengjiAdd from '../pages/shiyanchengji/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import friendlinkList from '../pages/friendlink/list'
import friendlinkDetail from '../pages/friendlink/detail'
import friendlinkAdd from '../pages/friendlink/add'
import onlinemessageList from '../pages/onlinemessage/list'
import onlinemessageDetail from '../pages/onlinemessage/detail'
import onlinemessageAdd from '../pages/onlinemessage/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'xueyuanxinxi',
					component: xueyuanxinxiList
				},
				{
					path: 'xueyuanxinxiDetail',
					component: xueyuanxinxiDetail
				},
				{
					path: 'xueyuanxinxiAdd',
					component: xueyuanxinxiAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'kechengziliao',
					component: kechengziliaoList
				},
				{
					path: 'kechengziliaoDetail',
					component: kechengziliaoDetail
				},
				{
					path: 'kechengziliaoAdd',
					component: kechengziliaoAdd
				},
				{
					path: 'xueshengxuanke',
					component: xueshengxuankeList
				},
				{
					path: 'xueshengxuankeDetail',
					component: xueshengxuankeDetail
				},
				{
					path: 'xueshengxuankeAdd',
					component: xueshengxuankeAdd
				},
				{
					path: 'shiyanxiangmu',
					component: shiyanxiangmuList
				},
				{
					path: 'shiyanxiangmuDetail',
					component: shiyanxiangmuDetail
				},
				{
					path: 'shiyanxiangmuAdd',
					component: shiyanxiangmuAdd
				},
				{
					path: 'xiangmuyuyue',
					component: xiangmuyuyueList
				},
				{
					path: 'xiangmuyuyueDetail',
					component: xiangmuyuyueDetail
				},
				{
					path: 'xiangmuyuyueAdd',
					component: xiangmuyuyueAdd
				},
				{
					path: 'shiyanbaogao',
					component: shiyanbaogaoList
				},
				{
					path: 'shiyanbaogaoDetail',
					component: shiyanbaogaoDetail
				},
				{
					path: 'shiyanbaogaoAdd',
					component: shiyanbaogaoAdd
				},
				{
					path: 'shiyanchengji',
					component: shiyanchengjiList
				},
				{
					path: 'shiyanchengjiDetail',
					component: shiyanchengjiDetail
				},
				{
					path: 'shiyanchengjiAdd',
					component: shiyanchengjiAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'friendlink',
					component: friendlinkList
				},
				{
					path: 'friendlinkDetail',
					component: friendlinkDetail
				},
				{
					path: 'friendlinkAdd',
					component: friendlinkAdd
				},
				{
					path: 'onlinemessage',
					component: onlinemessageList
				},
				{
					path: 'onlinemessageDetail',
					component: onlinemessageDetail
				},
				{
					path: 'onlinemessageAdd',
					component: onlinemessageAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
