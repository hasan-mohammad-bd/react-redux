import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstents"

export const increamentCounter = () => {
    return {
        type: INCREMENT
    }
}
export const decreamentCounter = () => {
    return {
        type: DECREMENT
    }
}
export const resetCounter = () => {
    return {
        type: RESET
    }
}