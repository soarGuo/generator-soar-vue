import React, { Component } from 'react'

import {
    Row,
    Col,
    Card,
    Icon,
    Button
} from 'antd'

import SiderCustom from '../../components/infoCard/index'
import "./about.css"
import * as action from '../../redux/action'
// import { addCount, reduceCount } from '../../redux/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

@connect(
    state => state.reducer,
    // { addCount, reduceCount},
    dispatch=>bindActionCreators(action,dispatch)
)

class About extends Component {
    componentDidMount() {
    }
    UNSAFE_componentWillReceiveProps(vvv) {
        console.log(vvv, "props 变化了")
    }
    render() {
        return (
            <div>
                <Row>
                    <Col
                        lg={{ span: 15, offset: 1 }}
                        md={{ span: 15, offset: 1 }}
                        xs={{ span: 24 }}
                        className="about-wrapper">
                        <Card
                        title="关于我"
                        style={{marginBottom: 20}}
                        >
                        <div className="content">
                            <p>
                            嘿！你好，我是博客的博主！该博客主要是用来记录我的一些技术点滴，
                            和一些其他方面的随笔，感悟，生活等。
                            </p>
                            <p style={{marginTop: 20}}>
                                作为一个前端菜鸟，一直想要弄一个自己的博客，因为懒，一直没动手，现在在学习react,就想自己动手写一个，也算是对自己编码能力的一种试验吧，于是有了这个网站。
                            </p>
                        
                        </div>
                        </Card>
                        <Card
                        title="联系我"
                        >
                        <div className="content">
                            <p>
                            <Icon type="mail" /> 邮箱：soarGuo@163.com
                            </p>
                            <p style={{marginTop: 20}}>
                            {/* <Icon type="github" /> Github：<a href="https://github.com/k-water" target="_blank" rel="noopener noreferrer">k-water</a> */}
                            </p>
                        </div>
                        </Card>

                        <Card
                        style={{marginTop: 20}}
                        title="redux"
                        >
                        <Button type="primary" onClick={this.props.addCount}>加</Button>
                        <span style={{margin: 20}}>{this.props.count}</span>
                        <Button type="primary" onClick={() => this.props.reduceCount(5)}>减</Button>
                        </Card>
                    </Col>
                    <Col
                        lg={{ span: 6, offset: 1 }}
                        md={{ span: 6, offset: 1 }}
                        xs={{ span: 0 }}
                    >
                        <SiderCustom />
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg={{ span: 0 }}
                        md={{ span: 0 }}
                        xs={{ span: 24 }}
                        style={{marginTop: 20}}
                    >
                        <SiderCustom />
                    </Col>
                </Row>
            </div>
        )
    }
}
// 方法一
// function mapStateToProps(state) {
//     return {
//         count: state.reducer.count
//     }
// }
// function mapActionToProps(dispatch) {
//     // console.log(dispatch(), "dispatch(addCount()")
//     return {
//         addCount: () => dispatch(addCount()),
//         reduceCount: (num) => dispatch(reduceCount(num))
//     }
// }

// export default connect(mapStateToProps, mapActionToProps)(About)
export default About