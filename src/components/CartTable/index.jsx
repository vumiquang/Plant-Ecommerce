import React, { useRef } from 'react';
import iconDel from '../../assets/images/icon/delete.svg';
import anh1 from '../../assets/images/cay-luoi-ho.png';
import './style.scss';
import { useSelector } from 'react-redux';
import { formatMoney } from '../../util/formatMoney';
import { deleteCart } from '../../store/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { updateCollection } from '../../firebase/util';
import { changeCountProduct } from '../../store/Product/productSlice';
import cartSlice from '../../store/Cart/cartSlice';
import notifySlice from '../../store/Notification/notifySlice';
import productSlice from '../../store/Product/productSlice';

const CartTable = ({ carts }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const timeOutCountRef = useRef(null);

    const alertDeleteSuccess = () => {
        dispatch(
            notifySlice.actions.addNotify({
                content: 'Xóa thành công',
                type: 'success',
            })
        );
    };
    const alertDeleteFail = () => {
        dispatch(
            notifySlice.actions.addNotify({
                content: 'Có lỗi cảy ra',
                type: 'warn',
            })
        );
    };

    const handleChangeCount = (cart, count) => {
        const tree = products.find((product) => {
            return product.id === cart.plantid;
        });
        if (cart.count === 1 && count < 0) return;
        if (Number(tree[cart.size]) <= 0 && count > 0) {
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Cây loại này trong của hàng đã hết',
                    type: 'warn',
                })
            );
            return;
        }

        dispatch(cartSlice.actions.updateCountCart({ id: cart.id, count }));
        dispatch(
            productSlice.actions.changeCount({
                id: cart.plantid,
                count,
                size: cart.size,
            })
        );
        if (timeOutCountRef.current) {
            clearTimeout(timeOutCountRef.current);
        }
        timeOutCountRef.current = setTimeout(() => {
            const tree = products.find((product) => {
                return product.id === cart.plantid;
            });
            const curCart = carts.find((c) => {
                return c.id === cart.id;
            });
            updateCollection('plant', cart.plantid, {
                [cart.size]: tree[cart.size] - count,
            });
            updateCollection('cart', cart.id, { count: curCart.count + count });
        }, 500);
    };

    return (
        <div className="cart-table">
            <table>
                <thead>
                    <tr className="cart-table__title">
                        <th colSpan={2}>Sản phẩm</th>
                        <th className="m-hidden">Giá</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, stt) => {
                        const size =
                            cart.size === 'smallcount'
                                ? 'small'
                                : cart.size === 'mediumcount'
                                ? 'medium'
                                : 'big';
                        return (
                            <tr className="cart-table__row" key={stt}>
                                <td className="cart-table__img">
                                    <img src={cart.img} alt="" />
                                </td>
                                <td className="cart-table__name">
                                    <span>{`${cart.name} (${size})`}</span>
                                    <br />
                                    <p className="mobile-show">
                                        {formatMoney(cart.price)}
                                    </p>
                                </td>
                                <td className="cart-table__price m-hidden">
                                    {formatMoney(cart.price)}
                                </td>
                                <td className="cart-table__count">
                                    <div>
                                        <i
                                            className="bx bx-minus-circle"
                                            onClick={() => {
                                                handleChangeCount(cart, -1);
                                            }}
                                        ></i>
                                        <span>{cart.count}</span>
                                        <i
                                            className="bx bx-plus-circle"
                                            onClick={() => {
                                                handleChangeCount(cart, 1);
                                            }}
                                        ></i>
                                    </div>
                                </td>
                                <td className="cart-table__delete">
                                    <img
                                        src={iconDel}
                                        alt=""
                                        onClick={() => {
                                            dispatch(deleteCart(cart.id));
                                            dispatch(
                                                changeCountProduct({
                                                    id: cart.plantid,
                                                    count: cart.count,
                                                    size: cart.size,
                                                })
                                            );
                                            alertDeleteSuccess();
                                        }}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;
