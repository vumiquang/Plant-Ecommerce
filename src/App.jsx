import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Router from './route';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from './store/Product/productSlice';
import userSlice from './store/User/userSlice';
import NotifyWrap from './components/NotifyWrap';
import cartSlice, { getAllCart } from './store/Cart/cartSlice';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
    const user = useSelector((state) => state.user);
    // const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
        const u = localStorage.getItem('user');
        if (u && !user.isLogin)
            dispatch(userSlice.actions.login(JSON.parse(u)));
    }, []);

    useEffect(() => {
        if (user.isLogin) dispatch(getAllCart(user.id));
        else dispatch(cartSlice.actions.resetCart());
    }, [user]);
    return (
        <>
            <ScrollToTop>
                <NotifyWrap dispatch={dispatch} />
                <Header />
                <main>
                    <Router></Router>
                </main>
                <NewsLetter />
                <Footer />
            </ScrollToTop>
        </>
    );
};

export default App;
