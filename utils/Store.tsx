import React, {createContext, useReducer} from 'react'
import { ProductInterface } from '../Data/Interface'

type Action = {
    type: 'ADD_TO_CART',
    payload: ProductInterface
} | {
    type: "CLEAR_CART"
}


interface State {
    cart: ProductInterface[]
}

const initialState:State = {
    cart: []
}

function reducer(state: State, action: Action){
    switch(action.type){
        case 'ADD_TO_CART':
            let item = action.payload
            let cart = state.cart
            if(!cart.find(prod=> prod.name === item.name)){
                cart.push(item)
            }
            return{
                cart
            }
        case "CLEAR_CART":
            return{
                cart: []
            }
            
        default:
            return state
    }
}



interface cartContextProp {
    cartState: State,
    cartDispatch: React.Dispatch<Action>
}

export const Store = createContext<cartContextProp>({
    cartState: initialState,
    cartDispatch: ()=> {}
})

export function StoreProvider(props){

    const [cartState, cartDispatch] = useReducer(reducer, initialState);
    const value = {
        cartState,
        cartDispatch
    }

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}

// export interface ICartActions {
//     type: 'ADD_ITEM' | 'REMOVE_ITEM',
//     payload: ProductInterface
// }

// export interface ICartState {
//     items: { [key: string]: ProductInterface[]}
// }

// const initialCartState: ICartState = {
//     items: {}
// }

// export const reducer = (state: ICartState, action: ICartActions) =>{
//     let item = action.payload;
//     let items = {...state.items}
//     switch(action.type){
//         case 'ADD_ITEM':
//             if(items[item.name]){
//                 items[item.name].push(item)
//             }else{
//                 items[item.name] = [item]
//             }
//             return {...state, items}

//         default:
//             return state
//     }
// }

// export interface ICartContextProps {
//     cartState: ICartState,
//     cartDispatch: React.Dispatch<ICartActions>

// }

// const CartContext = createContext<ICartContextProps>({
//     cartState: initialCartState,
//     cartDispatch: ()=> {}
// })

// export function StoreProvider(props){

//     const [cartState, cartDispatch] = useReducer(reducer, initialCartState);
//     const value = {
//         cartState,
//         cartDispatch
//     }

//     return <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
// }