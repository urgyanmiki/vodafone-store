import { useCallback, useContext, useMemo } from "react";
import cartContext from "../context/CartContext"
import { CART_ACTION_TYPES } from "../context/actionTypes"

export const useCart = () => {
    const { cartDispatch, cartState } = useContext(cartContext);

    const addToCart = useCallback((product) => {
        if (!product) return

        cartDispatch({
            type: CART_ACTION_TYPES.ADD_TO_CART,
            payload: product
        })
    }, [cartDispatch]);

    const countOfProducts = useMemo(() => {
        return cartState.products.reduce((totalAmount, product) => totalAmount + product.amount, 0);
    }, [cartState.products])

    return { addToCart, countOfProducts, productList: cartState.products, orderValue: cartState.orderValue }
}