import { getFormattedPrice } from "../../utils/helpers"
import { CartProductList } from "./CartProductList"

export const CartDescription = ({ isDescriptionOpen, countOfProducts, productList, orderValue }) => {
    if (!isDescriptionOpen) return

    return (
        <div className="cart-description">
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