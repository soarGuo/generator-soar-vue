import * as React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateIsHeaderStatus } from '../redux/action'

@connect(
    state=> state.reducer,
    {updateIsHeaderStatus}
)
 
class AuthRouter extends React.Component {
    constructor(props) {
        super(props)
        this.editTitle = this.editTitle.bind(this)
    }
    componentDidMount() {
        // console.log(this.props)
    }

    editTitle(title) {
        document.title = title
    }
    
    render(){
        const white = ["/login", "/register", "/404"]
        const { location,config } = this.props;
        // console.log(config, "config")
        // console.log(location, "location")
        const { pathname } = location;
        const isLogin = localStorage.getItem('config_token')
        
        // 如果该路由不用进行权限校验，登录状态下登录页除外
        // 因为登录后，无法跳转到登录页
        // 这部分代码，是为了在非登录状态下，访问不需要权限校验的路由直接跳转
        const targetRouterConfig = config.find(v => v.path === pathname);
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            if (white.includes(pathname)) {
                this.props.updateIsHeaderStatus(false)
            }
            const { component, title } = targetRouterConfig;
            this.editTitle(title)
            return <Route exact path={pathname} component={component} />
        }
        // debugger;
        // 登录状态
        if(isLogin){
            // 如果是登录状态，想要跳转到登录，重定向到主页
            if(pathname === '/login'){
                this.editTitle("主页")
                return <Redirect to='/' />
            }else{
                // 如果路由合法且不等于404，就跳转到相应的路由
                if(targetRouterConfig){
                    if (white.includes(pathname)) {
                        this.props.updateIsHeaderStatus(false)
                    } else {
                        this.props.updateIsHeaderStatus(true)
                    }
                    this.editTitle(targetRouterConfig.title)
                    return <Route path={pathname} exact component={targetRouterConfig.component} />
                }else{
                    this.props.updateIsHeaderStatus(false)
                    this.editTitle("404")
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to='/404' />
                }
            }
        }else{
            this.props.updateIsHeaderStatus(false)
            // 非登录状态下，当路由合法时且需要权限校验时，跳转到登录页面，要求登录
            if(targetRouterConfig && targetRouterConfig.auth){
                this.editTitle(targetRouterConfig.title)
                return <Redirect to='/login' />
            }else{
                // 非登录状态下，路由不合法时，重定向至 404
                this.editTitle("404")
                return <Redirect to='/404' />
            }
        }
    }
}

export default AuthRouter