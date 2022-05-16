import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact" element={<Contact />} />
                <Route path="product" element={<Product />} />
                <Route path="product/:productID" element={<ProductDetail />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;
