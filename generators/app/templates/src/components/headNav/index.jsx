
import React,{Component} from 'react'
// 解决非路由组件跳转问题
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateToken } from '../../redux/action'
import './index.css'
import { 
    Layout,
    Row,
    Col,
    Button,
    Menu,
    Dropdown,
    Avatar,
    Icon
} from 'antd'
import Navigate from '../menu/index'
import { menus } from '../menu/list'
import avatar from "../../images/avatar.jpg"

const { Header } = Layout

@connect(
    state => state.reducer,
    {updateToken}
)

class headNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: "首页",
            userName: "",
            avatar: avatar,
            defaultItem: "首页"
        }
        this.toLogin = this.toLogin.bind(this)
        this.toRegister = this.toRegister.bind(this)
        this.menuClick = this.menuClick.bind(this)
    }
    toLogin() {
        this.props.history.push("/login")
    }
    toRegister() {
        this.props.history.push("/register")
    }
    menuClick(obj) {
        sessionStorage.defaultItem = obj.key
    }
    UNSAFE_componentWillReceiveProps(vvv) {
        console.log(vvv, "props 变化")
    }
    UNSAFE_componentWillMount() {
        if(sessionStorage.defaultItem) {
            this.setState({
                defaultItem: sessionStorage.defaultItem
            })
        }
    }
    componentDidMount() {
        
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <span 
                    className="user-logout"
                    onClick={() => {
                        // 清除token
                        localStorage.removeItem("config_token")
                        this.props.updateToken("")
                    }}
                    >
                    退出登录
                    </span>
                </Menu.Item>
            </Menu>
        )
        const navigator = (
            <Navigate
              menus={menus}
              onClick={this.menuClick}
            />
          )
        return (
            <Header className="base-header">
                <Row>
                    <Col md={{span: 4}} xs={{span: 0}}>
                        <div className="logo"></div>
                    </Col>
                    <Col
                        lg={{span: 0}}
                        md={{span: 0}}
                        xs={{span: 10}}
                        className="drop-down">
                        <Dropdown overlay={navigator} trigger={['click']}>
                            <Button type="primary" ghost style={{border: 'none'}}>
                                {this.state.nav}<Icon type="caret-down" />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col md={{span: 14}} xs={{span: 0}}>
                        <Navigate menus={menus} onClick={this.menuClick} mode="horizontal" defaultitem={this.state.defaultItem}/>
                    </Col>
                    <Col md={{span: 6}} xs={{span: 14}}>
                        <div className="nav-auth" style={{display: this.props.token ? 'none' : 'block'}}>
                            <Button 
                                ghost 
                                type="primary" 
                                size="small" 
                                style={{marginRight: 20}}
                                onClick={this.toLogin}>
                                登录
                            </Button>
                            <Button 
                                ghost 
                                type="danger" 
                                size="small"
                                onClick={this.toRegister}>
                                注册
                            </Button>
                        </div>
                        <div className="user-info" style={{display: this.props.token ? 'flex' : 'none'}}>
                            {/* <span>游客</span> */}
                            <Dropdown
                                placement="bottomCenter"
                                overlay={menu}>
                                <Avatar
                                    className="user-avatar"
                                    shape="square" 
                                    size="large"
                                    src={this.state.avatar}
                                    style={{backgroundColor: 'rgb(255, 191, 0)'}}>
                                    {/* {this.state.userName ? this.state.userName[0] : null} */}
                                </Avatar>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Header>
        )
    }
 
}
export default withRouter(headNav)