import React, {useContext, useReducer} from 'react'

const StateContext = React.createContext()

export function StateProvider({reducer, initState, children}){
    return(
        <StateContext.Provider value={useReducer(reducer, initState)}>
            {children}
        </StateContext.Provider>
    )
    
}

export default function useStateValue(){
    return useContext(StateContext)
}