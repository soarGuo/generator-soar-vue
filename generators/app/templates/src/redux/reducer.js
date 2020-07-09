
import { 
    ADD_COUNT, 
    REDUCE_COUNT, 
    UPDATE_TOKEN,
    IS_HEASER
} from "./actionTypes"

// 初始值
const initState = {
    count: 1,
    token: "",
    isHeader: true
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case REDUCE_COUNT:
            return {
                ...state,
                count: state.count - action.num
            }
        case UPDATE_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case IS_HEASER:
            return {
                ...state,
                isHeader: action.status
            }
        default:
            return state
    }
}