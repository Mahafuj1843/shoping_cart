import React, { Fragment } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';


const ProductCarousel = ({ product, text }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Fragment>
            <div className="my-[25px] md:my-[50px]">
                <div className="text-2xl font-bold mb-5">{text}</div>
                <Carousel
                    responsive={responsive}
                    containerClass="-mx-[10px] py-1"
                    itemClass="px-[10px]"
                >
                    {
                        product?.map((prod, i) =>
                            <ProductCard key={i} product={prod} />
                        )
                    }
                </Carousel>
            </div>
        </Fragment>
    )
}

export default ProductCarousel