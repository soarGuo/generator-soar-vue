import React, { Component } from 'react'
import {
    Row,
    Col
} from 'antd'
import SiderCustom from '../../components/infoCard/index'

class Collect extends Component {
    componentDidMount() {
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
                        this is collect
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

export default Collect