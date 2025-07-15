import { getFormattedPrice } from "../../utils/helpers"

export const CartProductList = ({ productList }) => {
    if (productList.length === 0) return;

    return (
        <>
            <hr className="divider" />
            <table className="products-table">
                <thead>
                    <tr>
                        <th>
                            Items
                        </th>
                        <th>
                            Units
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) =>
                        <tr key={product.id}>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.amount}
                            </td>
                            <td>
                                {getFormattedPrice(product.price)}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}