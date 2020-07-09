// 按路由拆分代码,实现懒加载
import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from "antd"
// 加载中占位组件
const MyLoadingComponent = (props) => {
    // Handle the loading state
    if (props.pastDelay) {
        return <Spin tip="Loading..." delay={300} />;
    } else if (props.error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};

export default (loader) => {
    return Loadable({
        loader,
        loading: MyLoadingComponent,
        delay: 300
    }) 
}
