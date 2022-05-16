import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Slide from '../components/ProductDetail/Slide';
import Comment from '../components/ProductDetail/Comment';
import productSlice from '../store/Product/productSlice';
import Detail from '../components/ProductDetail/Detail';
import anh1 from '../assets/images/cay-luoi-ho.png';
import anh2 from '../assets/images/lan-dot-quy.png';
import anh3 from '../assets/images/dua-long-chua.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCollectionBy,
    plantCollection,
    reviewCollection,
} from '../firebase/util';
const ProductDetail = () => {
    const param = useParams();
    const products = useSelector((state) => state.products.products);
    const [tree, setTree] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        for (let t of products) {
            if (t.id === param.productID) {
                setTree(t);
                break;
            }
        }
    }, [products]);

    useEffect(() => {
        (async () => {
            const cmts = await getCollectionBy(
                reviewCollection,
                'plantid',
                param.productID
            );
            cmts.sort(function (a, b) {
                return Date.parse(a.time) - Date.parse(b.time);
            });
            setComments(cmts);
        })();
    }, [tree]);
    if (tree === null)
        return (
            <div className="product-detail">
                <Banner title="Chi tiết sản phẩm" />
                <div className="container">
                    <p className="not-found-tree">Không tìm thấy</p>
                </div>
            </div>
        );
    else
        return (
            <div className="product-detail">
                <Banner title="Chi tiết sản phẩm" />
                <div className="container">
                    <Slide img1={tree.img1} img2={tree.img2} img3={tree.img3} />
                    <Detail tree={tree} />
                </div>
                <Comment
                    tree={tree}
                    comments={comments}
                    setComments={setComments}
                />
            </div>
        );
};

export default ProductDetail;
