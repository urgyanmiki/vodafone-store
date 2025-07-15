import cartIcon from "../../assets/cart.svg"
import { CartCountBadge } from "./CartCountBadge"

export const CartBtn = ({ countOfProducts, handleToggleSummary }) => {
    return (
        <button className="cart-btn fc-white" onClick={handleToggleSummary}>
            <img src={cartIcon}
                alt="Shopping Cart Icon"
                height="24"
            />
            <span className="fs-13">Shopping cart</span>
            <CartCountBadge countOfProducts={countOfProducts} />
        </button>
    )
}