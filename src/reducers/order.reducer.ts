import type { MenuItem, OrderItem, TipOption } from "../interfaces";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'set-tip', payload: { tip: TipOption['value'] } }

export interface OrderState {
    order: OrderItem[];
    tip: TipOption['value'];
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}


export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
): OrderState => {

    let updatedOrder: OrderItem[] = [];

    switch (action.type) {


        case "add-item":

            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id);

            if (itemExist) {

                updatedOrder = state.order.map(

                    orderItem => orderItem.id === action.payload.item.id
                        ? { ...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                );

                return {
                    ...state,
                    order: updatedOrder
                }

            } else {
                const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
                updatedOrder = [...state.order, newItem]
            }



            return {
                ...state,
                order: updatedOrder

            }

        case "remove-item":

            updatedOrder = state.order.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                order: updatedOrder
            }


        case "place-order":
            return {
                order: [],
                tip: 0
            }

        case "set-tip":
            return {
                ...state,
                tip: action.payload.tip
            }

        default:
            return state;
    }

}


