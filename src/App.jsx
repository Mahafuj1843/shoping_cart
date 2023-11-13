import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Toaster } from 'react-hot-toast';
import ProductListPage from './pages/ProductListPage';
import Newsletter from './layout/Newsletter';
import Footer from './layout/Footer';
import Header from './layout/Header';
import CheckoutPage from './pages/CheckoutPage';
import ScrollTop from './helper/scrollTop';

function App() {

  return (
    <Fragment>
        <Header />
        <ScrollTop />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/product' element={<ProductListPage />} />
          <Route exact path='/productdetails/:id' element={<ProductDetailsPage />} />
          <Route exact path='/cart' element={<CartPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </Fragment>
  )
}

export default App
