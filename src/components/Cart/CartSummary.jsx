import { getFormattedPrice } from "../../utils/helpers"
import { CartProductList } from "./CartProductList"

export const CartSummary = ({ isSummaryOpen, countOfProducts, productList, orderValue }) => {
    if (!isSummaryOpen) return

    return (
        <div className="cart-summary">
            <span className="triangle"></span>
            <p className="title">
                You have {countOfProducts} items in your cart!
            </p>
            <CartProductList productList={productList} />
            <hr className="divider lg" />
            <div className="total">
                <b>
                    Total Order Value
                </b>
                <b>
                    {getFormattedPrice(orderValue)}
                </b>
            </div>
            <hr className="divider" />
            <button className="btn btn-checkout color-primary w-100">
                Checkout
            </button>
        </div>
    )
}