import axios from "axios";
import store from "../redux/store/store";
import { ErrorToast } from "../helper/formHelper";
import { setProduct, setProductDetails } from "../redux/state/productSlice";
const BaseURL = "https://shop-web.onrender.com/api"

export const AllProductRequest = () => {
    let URL = BaseURL + "/product";
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            store.dispatch(setProduct(res.data))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
            ErrorToast("Something Went Wrong")
            return false;
    })
}

export const ProductdetailsRequest = (productId) => {
    let URL = BaseURL + `/product/details/${productId}`;
    return axios.get(URL).then((res) => {
        if (res.status === 200) {
            store.dispatch(setProductDetails(res.data))
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
            ErrorToast("Something Went Wrong")
            return false;
    })
}