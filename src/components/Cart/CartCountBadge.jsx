export const CartCountBadge = ({ countOfProducts }) => {
    if (!countOfProducts) return;

    return (
        <span className="prod-count-badge">
            {countOfProducts}
        </span>
    )
}