import { INCREMENT, DECREMENT } from '../actions'

// 状態を定義

// 初期状態
const initialState = { value: 0 };

// 第２引数：action
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}