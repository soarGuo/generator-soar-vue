import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateToken } from '../../redux/action'
import {
    LoginApi
} from "../../api/login/index.js"

import { 
    Form,
    Input,
    Icon,
    // Checkbox,
    Button,
    message,
    Row,
    Col
} from 'antd'

import "./login.css"

@connect(
    state => state.reducer,
    { updateToken }
)
class LoginFormComponent extends Component {
    constructor(props) {
        super(props)
        this.handleOk = this.handleOk.bind(this)
        this.toHref = this.toHref.bind(this)
    }

    handleOk(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                LoginApi(values).then(res => {
                    if (res.data.code === 0) {
                        message.success("登录成功")
                        localStorage.config_token = res.data.token
                        this.props.updateToken(res.data.token)
                        this.props.history.push("/")
                    } else {
                        message.warning(res.data.msg)
                    }
                }).catch(err => {
                    console.log(err, "err")
                })
            }
        })
    }
    toHref() {
        this.props.history.push("/register")
    }
    componentDidMount() {
        this.props.form.setFieldsValue({
            account: "admin@163.com",
            password: "123456"
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="login-content">
                <Col xs={{span: 18, offset: 3}} sm={{span: 16, offset: 4}} md={{span: 12, offset: 6}} lg={{span: 8, offset: 8}} >
                    <Form onSubmit={this.handleOk} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('account', {
                                rules: [{ required: true, message: '请输入您的邮箱账户' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入您的邮箱账户"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码!' }],
                            })(
                                <Input.Password visibilityToggle={false}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="请输入您的密码!"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {/* {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)} */}
                            {/* <span className="login-form-forgot color-blue">
                                忘记密码
                            </span> */}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            或 <span className="color-blue" onClick={this.toHref}>现在注册</span>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const Login = Form.create({ name: 'normal_login' })(LoginFormComponent)

export default Login