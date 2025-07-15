export const getFormattedPrice = (price) => {
    const convertedPrice = Number(price);
    if (isNaN(convertedPrice)) return null;

    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 0,
    }).format(price)
}