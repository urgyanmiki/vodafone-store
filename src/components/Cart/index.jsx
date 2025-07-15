import { useState } from "react";
import { CartDescription } from "./CartDescription";
import { CartBtn } from "./CartBtn";
import { useCart } from "../../hooks/useCart";

const Cart = () => {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const { countOfProducts, productList, orderValue } = useCart();

    const handleToggleDescription = () => {
        setDescriptionOpen(prev => !prev)
    }

    return (
        <span className="position-relative">
            <CartBtn countOfProducts={countOfProducts}
                handleToggleDescription={handleToggleDescription}
            />
            <CartDescription isDescriptionOpen={isDescriptionOpen}
                countOfProducts={countOfProducts}
                productList={productList}
                orderValue={orderValue}
            />
        </span>
    )
}

export default Cart