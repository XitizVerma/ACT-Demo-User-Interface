export const ADD_BORROW = "ADD_BORROW"

export const initState = []
export default function reducer(state, action){
    switch (action.type){
        case ADD_BORROW:
            console.log(action.payload)
            return [...state, action.payload]
        default:
            return [...state]
    }
}