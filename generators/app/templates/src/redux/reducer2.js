import { increment2, decrement2 } from "./actionTypes"

const initState = {
    number: 8
}
export default function (state = initState, action) {
    switch (action.type) {
        case increment2:
            return {
                number: state.number + 1
            }
        case decrement2:
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}