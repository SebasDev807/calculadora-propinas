import { useReducer, useState } from "react"
import type { MenuItem, TipOption } from "../interfaces";
import { initialState, orderReducer } from "../reducers/order.reducer";

export const useOrder = () => {

    // const [tip, setTip] = useState(0);


    const [state, dispatch] = useReducer(orderReducer, initialState)

    const addItem = (item: MenuItem) => {
        dispatch({ type: 'add-item', payload: { item } });
    }

    const removeItem = (id: MenuItem['id']) => {
        dispatch({ type: 'remove-item', payload: { id } })
    }

    const placeOrder = () => {
        dispatch({ type: 'place-order' })
    }

    const setTip = (tip: TipOption['value']) => {
        dispatch({ type: 'set-tip', payload: { tip } })
    }


    return {
        addItem,
        order: state.order,
        tip: state.tip,
        setTip,
        removeItem,
        placeOrder,
    }

}   