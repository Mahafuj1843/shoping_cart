import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast } from "../../helper/formHelper";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        Cart: []
    },

    reducers: {
        setCart: (state, action) => {
            state.Cart = action.payload
        },
        addToCart: (state, action) => {
            var temp = state.Cart.find((item) => item._id === action.payload._id)
            if (temp) SuccessToast('Product already added to cart.')
            else {
                state.Cart = [...state.Cart, { ...action.payload, qty: 1 }]
                localStorage.setItem("cart", JSON.stringify(state.Cart));
                SuccessToast('Product added to cart.')
            }
        },
        removeFromCart: (state, action) => {
            state.Cart = state.Cart.filter((c) => c._id !== action.payload._id),
                localStorage.setItem("cart", JSON.stringify(state.Cart));
            SuccessToast('Product remove from cart.')
        },
        incrementQty: (state, action) => {
            state.Cart = state.Cart.map((item) =>
                item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item
            );

            localStorage.setItem("cart", JSON.stringify(state.Cart));
        },
        decrementQty: (state, action) => {
            state.Cart = state.Cart.map((item) =>
                item._id === action.payload._id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );

            localStorage.setItem("cart", JSON.stringify(state.Cart));
        }
    }
})

export const { setCart, addToCart, removeFromCart, decrementQty, incrementQty } = cartSlice.actions
export default cartSlice.reducer