import React from 'react';
import { connect } from 'react-redux';
import { updateToken } from '../redux/action'
import { 
  Layout
} from 'antd'
import {HashRouter as Router, Switch} from 'react-router-dom'
import RouterMap from "../routers/router"
import AuthRouter from "../routers/AuthRouter"
import HeadNav from "../components/headNav/index"
import './layout.css';


const { Content, Footer } = Layout


@connect(
  state => state.reducer,
  {updateToken}
)
class LayoutCompont extends React.Component {
  // constructor(props) {
  //   super(props)
    
  // } 
  
  UNSAFE_componentWillMount() {
    const store = localStorage.getItem("config_token")
    if (store) {
      this.props.updateToken(store)
    }
  }

  UNSAFE_componentWillReceiveProps(data) {
    console.log(data, "init")
  }

  render() {
    const isHeader = this.props.isHeader
    const contentHeight = document.body.clientHeight - 64 - 69 + (isHeader ? 0 : 64)
    return (
      <Router>
        <Layout className="wrapper">
          {
            isHeader && <HeadNav />
          }
          <Layout>
            <Content className="wrapper-container" style={{minHeight: contentHeight, height: "100%"}}>
              <Switch>
                <AuthRouter config={RouterMap}></AuthRouter>
              </Switch>
            </Content>
            <Footer style={{textAlign: 'center'}}>
              <a href="http://www.beian.miit.gov.cn" target="_blank">黔ICP备19010724号</a>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default LayoutCompont;
