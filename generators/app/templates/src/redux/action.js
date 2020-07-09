import { 
    ADD_COUNT, 
    REDUCE_COUNT,
    increment2,
    decrement2,
    UPDATE_TOKEN,
    IS_HEASER
} from "./actionTypes"

export function addCount() {
    return {
        type: ADD_COUNT
    }
}

export function reduceCount(num) {
    return {
        type: REDUCE_COUNT,
        num
    }
}
export function addCount1() {
    return {
        type: increment2
    }
}

export function reduceCount2(num) {
    return {
        type: decrement2,
        num
    }
}

export function updateToken(token) {
    return {
        type: UPDATE_TOKEN,
        token
    }
}

export function updateIsHeaderStatus(status) {
    return {
        type: IS_HEASER,
        status
    }
}