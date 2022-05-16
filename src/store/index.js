import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Product/productSlice';
import userSlice from './User/userSlice';
import notifySlice from './Notification/notifySlice';
import cartSlice from './Cart/cartSlice';
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        user: userSlice.reducer,
        notify: notifySlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
