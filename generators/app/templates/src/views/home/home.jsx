import React, { Component } from 'react'

import {
    Row,
    Col,
    Button
} from 'antd'
import SiderCustom from '../../components/infoCard/index'

class Home extends Component {
    constructor(props) {
        super(props)
        this.toHref = this.toHref.bind(this)
    }
    componentDidMount() {
    }

    toHref() {
        this.props.history.push("/collect")
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
                        this is Home
                        <Button onClick={this.toHref}>点我</Button>
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

export default Home