import { getFormattedPrice } from "../../utils/helpers"
import { TooltipIcon } from "./TooltipIcon"

export const ProductInfo = ({
    productId,
    productName,
    productImage,
    productPrice,
    productSalePrice,
    handleAddToCart,
    handleToggleDescription
}) => {

    return (
        <article className="product-info">
            <div className="position-relative">
                <img src={productImage} alt="" className="image" />
            </div>
            <span className="description-btn"
                onMouseEnter={handleToggleDescription}
                onMouseLeave={handleToggleDescription}
            >
                <TooltipIcon />
            </span>
            <h3 className="name">
                {productName}
                {productSalePrice && <span className="sale-price">
                    {getFormattedPrice(productPrice)}
                </span>}
            </h3>
            <p className="price">
                {getFormattedPrice(productSalePrice ?? productPrice)}
            </p>
            <button className="btn btn-main color-primary w-100" onClick={() => handleAddToCart(productId, productName, productPrice, productSalePrice)}>
                Add to Cart
            </button>
        </article>
    )
}