//这里导入处理redux的中间件专门处理redux的异步问题 因为本身redux是同步的
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
// 导入各模块数据
import reducer from "./reducer"
import reducer2 from "./reducer2"

// 创建初始化的state，初始化为一个空对象即可，默认的数据建议都写在reducer上
const initializeState = {}; // 定义初始化的state
/**使用createStor(reducer)方法生成store 
  * 添加applyMiddleware(thunk)方法来处理thunk中间件来达到处理异步的效果
  * compose是用来组合createStore当中的多个方法
  */   
const store = createStore(
    combineReducers({
        reducer,
        reducer2
    }), 
    initializeState, 
    compose(
        applyMiddleware(thunk), 
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store