import cartIcon from "../../assets/cart.svg"
import { CartCountBadge } from "./CartCountBadge"

export const CartBtn = ({ countOfProducts, handleToggleDescription }) => {
    return (
        <button className="cart-btn fc-white" onClick={handleToggleDescription}>
            <img src={cartIcon}
                alt="Shopping Cart Icon"
                height="24"
            />
            <span className="fs-13">Shopping cart</span>
            <CartCountBadge countOfProducts={countOfProducts} />
        </button>
    )
}