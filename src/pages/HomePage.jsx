import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { Fragment } from 'react'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCarousel'
import { AllProductRequest } from '../api_request/productRequest'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'

const HomePage = () => {
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
      <Hero />
      {
        loading ?
          <Loading />
          :
          <>
            <div className='px-[2rem] md:px-[3rem] lg:px-[5rem]'>
              <ProductCarousel product={product?.slice(0, 10)} text={"New Arrival"} />
            </div>
            <div className='px-[2rem] md:px-[3rem] lg:px-[5rem]'>
              <ProductCarousel product={product?.slice(10, product?.length)} text={"Feature Product"} />
            </div>
          </>
      }
    </Fragment>
  )
}

export default HomePage
