// 按路由拆分代码,实现懒加载
import loadable from "./LazyLoad"

export default [
    { 
        path: "/", 
        name: "home", 
        component: loadable(() => import('../views/home/home')),
        auth: true,
        title: "主页"
    },
    { 
        path: "/archive", 
        name: "archive", 
        component: loadable(() => import('../views/archive/archive')),
        auth: true,
        title: "归档"
    },
    { 
        path: "/about", 
        name: "about", 
        component: loadable(() => import('../views/about/about')),
        auth: true,
        title: "关于"
    },
    { 
        path: "/collect", 
        name: "collect", 
        component: loadable(() => import('../views/collect/collect')),
        auth: true,
        title: "收藏" 
    },
    {
        path: "/login", 
        name: "login", 
        component: loadable(() => import('../views/login/login')),
        auth: false,
        title: "登录"
    },
    {
        path: "/register", 
        name: "register", 
        component: loadable(() => import('../views/login/register')),
        auth: false,
        title: "注册"
    },
    {
        path: "/404", 
        name: "404", 
        component: loadable(() => import('../views/404/404')),
        auth: false,
        title: "404"
    }
]