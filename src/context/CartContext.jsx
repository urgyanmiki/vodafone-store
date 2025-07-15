import { createContext, useReducer } from "react";
import { CART_ACTION_TYPES } from "./actionTypes"

const CartContext = createContext();

const initialState = {
    products: [],
    orderValue: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const prodInCart = state.products.find((product) => product.id === action.payload.id)

            if (prodInCart) {
                return {
                    products: state.products.map((product) => {
                        if (product.id === action.payload.id) {
                            return {
                                ...product,
                                amount: product.amount + 1,
                            }
                        }

                        return {
                            ...product
                        }
                    }),
                    orderValue: state.orderValue + +action.payload.price
                }
            } else {
                return {
                    products: [...state.products, {
                        ...action.payload,
                        amount: 1
                    }],
                    orderValue: state.orderValue + +action.payload.price
                }
            }
        }

        default: return state
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{
            cartState: state,
            cartDispatch: dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;