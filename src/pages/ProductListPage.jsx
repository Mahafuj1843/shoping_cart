import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AllProductRequest } from '../api_request/productRequest';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const ProductListPage = () => {
    let [loading, setLoading] = useState(false)
    let product = useSelector((state) => (state.product.Product));

    useEffect(() => {
        (async () => {
            setLoading(true)
            await AllProductRequest();
            setLoading(false)
        })();
    }, [])

    return (
        <Fragment>
            <div className="w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-10 md:py-14">
                {
                    loading ?
                        <Loading />
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2'>
                            {
                                product.map((prod, i) =>
                                    <ProductCard key={i} product={prod} />
                                )
                            }
                        </div>
                }
            </div>
        </Fragment>
    )
}

export default ProductListPage