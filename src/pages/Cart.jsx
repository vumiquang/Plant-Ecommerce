import React from 'react';
import Banner from '../components/Banner';
import iconDel from '../assets/images/icon/delete.svg';
import CartTable from '../components/CartTable';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../store/Cart/cartSlice';
import { formatMoney } from '../util/formatMoney';
const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart);

    const subTotal = carts.reduce((total, cur) => {
        return (total += cur.price * cur.count);
    }, 0);
    const tax = Math.round((subTotal * 3) / 100);
    return (
        <div className="cart-page">
            <Banner title="Giỏ hàng" />
            <div className="container">
                {carts.length === 0 ? (
                    <div className="cart-page__empty">Không có sản phẩm</div>
                ) : (
                    <>
                        <div className="cart-page__table">
                            <CartTable carts={carts} />
                        </div>

                        <div className="cart-page__price">
                            <div className="total">
                                <p>
                                    <span>Tổng giá sản phẩm</span>
                                    <span>{formatMoney(subTotal)}</span>
                                </p>
                                <p>
                                    <span>Thuế</span>
                                    <span>{formatMoney(tax)}</span>
                                </p>
                                <p className="total-price">
                                    <span>Tổng chi phí</span>
                                    <span>{formatMoney(subTotal + tax)}</span>
                                </p>
                                <p>
                                    <span></span>
                                    <button className="btn btn-small">
                                        Thanh toán
                                    </button>
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
