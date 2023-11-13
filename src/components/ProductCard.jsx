import React, { Fragment, useState } from 'react'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import { addToCart, removeFromCart } from '../redux/state/cartSlice'


const ProductCard = ({ product }) => {
    let cart = useSelector((state) => (state.cart.Cart));
    return (
        <Fragment>
            <div className="relative m-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to={`/productdetails/${product._id}`} className="relative mx-auto mt-3 flex h-48 overflow-hidden rounded-xl" href="#">
                    <img className="object-cover" src={product.image.url} alt="product image" />
                </Link>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{product.title.length > 25 ? product.title.slice(0, 23) + "..." : product.title}</h5>
                    </a>
                    <div className="my-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <Ratings rating={product.totalrating} />
                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.totalrating}</span>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                        <p>
                            <span className="text-2xl font-bold text-slate-900 me-1">${product.price}</span>
                            <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
                        </p>
                        <span className="m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white z-10">
                            {(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)}% OFF
                        </span>
                    </div>
                    {
                        cart.some((p) => p._id === product._id) ?
                            <div role='button' onClick={() => store.dispatch(removeFromCart(product))} className="z-[300] flex items-center justify-center rounded-md bg-red-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Remove cart
                            </div>
                            :
                            <div role='button' onClick={() => store.dispatch(addToCart(product))} className="z-[300] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to cart
                            </div>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard