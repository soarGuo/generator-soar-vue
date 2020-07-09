import React, { Component } from 'react'
import { userRegister, sendRegisterCaptcha } from "../../api/login/index.js"

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

class LoginFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisabled: false,
            regEmail: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            btnText: "验证码",
            timer: null
        }
        this.handleOk = this.handleOk.bind(this)
        this.toHref = this.toHref.bind(this)
        this.sendCode = this.sendCode.bind(this)
    }

    sendCode() {
        const { validateFields } = this.props.form
        validateFields(["account"], (errors, values) => {
            // console.log(errors, values)
            if (!errors) {
                if (!this.state.regEmail.test(values.account)){
                    message.warning("邮箱格式有误")
                    return false
                }
                if (this.state.isDisabled) {
                    return false
                }
                this.setState({
                    isDisabled: true
                })
                let count = 60
                this.state.timer = setInterval(() => {
                    if (count <= 0) {
                        this.setState({
                            isDisabled: false,
                            btnText: "验证码"
                        })
                        clearInterval(this.state.timer)
                    } else {
                        count--
                        this.setState({
                            btnText: count + "S"
                        })
                    }
                }, 1000);

                sendRegisterCaptcha({account: values.account}).then(res => {
                    if (res.data.code === 0) {
                        message.success("发送成功")
                    } else {
                        message.warning(res.data.msg)
                    }
                }).catch(err => {
                    
                })
            }
        });

    }

    handleOk(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received err of form: ', err);
            if (!err) {
                userRegister(values).then(res => {
                    if (res.data.code === 0) {
                        message.success("注册成功")
                    } else {
                        message.warning(res.data.msg)
                    }
                }).catch(err => {
                    message.error("服务器错误")
                })
            }
        })
    }
    toHref() {
        this.props.history.push({
            pathname: "/login"
        })
    }
    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className="login-content">
                <Col xs={{span: 18, offset: 3}} sm={{span: 16, offset: 4}} md={{span: 12, offset: 6}} lg={{span: 8, offset: 8}} >
                    <Form onSubmit={this.handleOk} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('name', {
                                initialValue: "",
                                rules: [{ required: true, message: '请输入您的用户名' }],
                            })(
                                <Input
                                prefix={<Icon type="meh" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入您的用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('account', {
                                initialValue: "",
                                rules: [{ required: true, message: '请输入您的邮箱账户' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="请输入您的邮箱账户"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('captcha', {
                                initialValue: "",
                                rules: [{ required: true, message: '请输入验证码' }],
                            })(
                                <Row>
                                    <Col span={18}>
                                        <Input type="number" className="send-input" 
                                            prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入验证码"/>
                                    </Col>
                                    <Col span={6}>
                                        <Button type="primary" 
                                        className="send-btn" 
                                        onClick={this.sendCode} 
                                        disabled={this.state.isDisabled}>{this.state.btnText}</Button>
                                    </Col>
                                </Row>
                                // <Search placeholder="input search text" enterButton />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                initialValue: "",
                                rules: [{ required: true, message: '请输入你的密码!' }],
                            })(
                                <Input.Password visibilityToggle={false}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="设置你的密码!"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                            或 <span className="color-blue" onClick={this.toHref}>现在登录</span>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const register = Form.create({ name: 'normal_login' })(LoginFormComponent)

export default register