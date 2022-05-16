import React, { useRef, useState } from 'react';
import './style.scss';
import Rate from '../../Rate';
import { formatMoney } from '../../../util/formatMoney';
import cartSlice from '../../../store/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import productSlice, {
    changeCountProduct,
} from '../../../store/Product/productSlice';
import notifySlice from '../../../store/Notification/notifySlice';
import { addNewCart } from '../../../store/Cart/cartSlice';
const Detail = ({ tree }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const selectSizeRef = useRef();
    const countRef = useRef();
    const [size, setSize] = useState('bigcount');
    const [count, setCount] = useState('1');

    const addToCart = () => {
        if (!user.isLogin) {
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Bạn chưa đăng nhập',
                    type: 'warn',
                })
            );
            return;
        }
        const countTree = Number(count);
        if (countTree < 1 || countTree > tree[size]) {
            dispatch(
                notifySlice.actions.addNotify({
                    content: 'Số lượng không đúng',
                    type: 'warn',
                })
            );
            return;
        }

        const data = {
            count: countTree,
            plantid: tree.id,
            price: tree.sale !== '0' ? Number(tree.sale) : Number(tree.price),
            size: size,
            userid: user.id,
            img: tree.img1,
            name: tree.name,
        };

        dispatch(addNewCart(data));
        dispatch(
            changeCountProduct({
                id: tree.id,
                count: -1 * data.count,
                size: size,
            })
            // productSlice.actions.changeCount()
        );
        dispatch(
            notifySlice.actions.addNotify({
                content: 'Thêm thành công',
                type: 'success',
            })
        );
    };
    return (
        <div className="product-detail-info">
            <h2>{tree.name}</h2>
            <div className="rate">
                <Rate rating={Number(tree.star)} size={15} />
            </div>
            <div className="price">
                {tree.sale !== '0' && <span>{formatMoney(tree.price)}</span>}
                <span className="sale">
                    {tree.sale !== '0'
                        ? formatMoney(tree.sale)
                        : formatMoney(tree.price)}
                </span>
            </div>
            <p>{tree.description}</p>
            <div className="size-select">
                <label htmlFor="">Kích cỡ</label>
                <select
                    onChange={() => {
                        setSize(selectSizeRef.current.value);
                    }}
                    ref={selectSizeRef}
                    value={size}
                >
                    <option value="bigcount">Big</option>
                    <option value="mediumcount">Medium</option>
                    <option value="smallcount">Small</option>
                </select>
                <span>Còn {tree[size]} sản phẩm</span>
            </div>
            <div className="count">
                <label htmlFor="">Số lượng</label>
                <input
                    type="number"
                    value={count}
                    ref={countRef}
                    min="1"
                    max={`${tree[size]}`}
                    onChange={() => {
                        setCount(countRef.current.value);
                    }}
                />
            </div>
            <div>
                <button
                    className="btn"
                    onClick={() => {
                        addToCart();
                    }}
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    );
};

export default Detail;
