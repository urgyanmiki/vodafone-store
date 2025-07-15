import { useState } from "react";
import { useCart } from "../../hooks/useCart"
import { ProductInfo } from "./ProductInfo";
import { ProductDescription } from "./ProductDescription";

export const ProductCard = ({ product }) => {
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);

    const { addToCart } = useCart();

    const handleAddToCart = (productId, productName, productPrice, productSalePrice = null) => {
        if (!productId || !productName || !productPrice) return;

        addToCart({
            id: productId,
            name: productName,
            price: productSalePrice ?? productPrice
        });
    }

    const handleToggleDescription = () => {
        setDescriptionOpen(prev => !prev)
    }

    return (
        <div className="product-card">
            <ProductInfo productId={product.id}
                productName={product.name}
                productImage={product.image}
                productPrice={product.price}
                productSalePrice={product.sale_price}
                handleAddToCart={handleAddToCart}
                handleToggleDescription={handleToggleDescription}
            />
            {isDescriptionOpen && <ProductDescription productDescription={product.description}
                productKeyFeatures={product.key_features}
                productImage={product.image}
                isDescriptionOpen={isDescriptionOpen}
            />}
        </div>
    )
}