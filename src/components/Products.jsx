import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard";

export const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("/products.json")
            .then(resp => resp.json())
            .then(resp => setProducts(resp))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="container position-relative z-2">
            <h1 className="page-title mx-auto mw-400 text-center">
                Fingertips Store
            </h1>
            <div className="grid">
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}