import Vue from 'vue'
import Router from 'vue-router'

// @符表示路径为src

// 引入底部导航栏中的组件
import Home from "@/components/tabbar/home"
import Member from "@/components/tabbar/member"
import Cart from "@/components/tabbar/cart"
import Search from "@/components/tabbar/search"

// 引入商品相关组件
import GoodsList from "@/components/goods/list"
import GoodDetail from "@/components/goods/detail"
// 引入新闻相关组件
import NewsList from "@/components/news/list"
import NewsDetail from "@/components/news/detail"
// 引入图片相关组件
import PicList from "@/components/pictures/list"
import PicDetail from "@/components/pictures/detail"

Vue.use(Router)

export default new Router({
	// 设置路由规则
  routes: [
  	// tabbar中的路由
    {
      	path:"/",
      	redirect:"/home"
    },
    {
    	path:"/home",
    	component:Home
    },{
    	path:"/member",
    	component:Member
    },{
    	path:"/search",
    	component:Search
    },{
    	path:"/cart",
    	component:Cart
    }
    // 设置商品路由
    ,{
    	path:"/goods",
    	component:GoodsList
    },
    {
    	path:"/goods/detail",
    	component:GoodDetail
    }
    // 设置新闻路由
    ,{
    	path:"/news",
    	component:NewsList
    }
    ,{
    	// 新闻详情需要传递id，来展示内容
    	path:"/news/detail/:id",
    	component:NewsDetail
    }
    // 设置图片路由
    ,{
    	path:"/pics",
    	component:PicList
    }
    ,{
    	path:"/pics/detail",
    	component:PicDetail
    }
  ],
  linkActiveClass: "mui-active"
})
