import { INCREMENT, DECREMENT } from '../actions'

// 状態を定義

// 初期状態
const initialState = { value: 0, test: 'a' };

// 第２引数：引数で受け取ったaction
export default (state = initialState, action) => {
    
    console.log(initialState)
    console.log("state")
    console.log(state);
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1, test: 'b' }
        case DECREMENT:
            return { value: state.value - 1, test: 'c' }
        default:
            return state
    }

}