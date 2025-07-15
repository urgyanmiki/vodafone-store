import { useState } from "react";
import { CartSummary } from "./CartSummary";
import { CartBtn } from "./CartBtn";
import { useCart } from "../../hooks/useCart";

const Cart = () => {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const { countOfProducts, productList, orderValue } = useCart();

    const handleToggleSummary = () => {
        setIsSummaryOpen(prev => !prev)
    }

    return (
        <span className="position-relative">
            <CartBtn countOfProducts={countOfProducts}
                handleToggleSummary={handleToggleSummary}
            />
            <CartSummary isSummaryOpen={isSummaryOpen}
                countOfProducts={countOfProducts}
                productList={productList}
                orderValue={orderValue}
            />
        </span>
    )
}

export default Cart