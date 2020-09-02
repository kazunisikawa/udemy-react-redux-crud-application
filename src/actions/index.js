//Actoinとはjavascriptのオブジェクトのこと
//そのオブジェクトの内部でtypeというkeyと、typeの値を持つ、typeの値はユニークでなければならない。

// インクリメント、デクリメントという活動が発生
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// reduxではActionを返す関数のことをActionCreatorという
export const increment = () => ({
        type: INCREMENT
})

export const decrement = () => ({
        type: DECREMENT
})
