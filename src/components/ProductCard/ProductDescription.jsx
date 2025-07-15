import { useLayoutEffect, useRef, useState } from "react";

export const ProductDescription = ({ productDescription, productKeyFeatures, productImage }) => {
    const [isFloatLeft, setIsFloatLeft] = useState(false);
    const descriptionRef = useRef();

    useLayoutEffect(() => {
        if (!descriptionRef.current) return;

        const descriptionRect = descriptionRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (descriptionRect.left + descriptionRect.width > windowWidth) setIsFloatLeft(true);
    }, []);

    return (
        <div className={`product-description ${isFloatLeft ? 'float-left' : ''}`} ref={descriptionRef}>
            <img src={productImage} alt="Product Image" className="prod-desc-img" />
            <div>
                <p className="title">
                    <b>
                        Description
                    </b>
                </p>
                <p className="mb-2">
                    {productDescription}
                </p>
                <p className="title">
                    <b>
                        Key features
                    </b>
                </p>
                <table className="description-table">
                    <tbody>
                        {productKeyFeatures.map((feature) =>
                            <tr key={feature.title}>
                                <td className="">
                                    {feature.title}
                                </td>
                                <td>
                                    {feature.value}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
