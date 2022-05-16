import React, { useEffect, useState } from 'react';
import RowTreeCard from '../RowTreeCard';
import { Link } from 'react-router-dom';
import './menutree.scss';
import { useSelector } from 'react-redux';
const MenuTree = () => {
    const products = useSelector((state) => state.products.products);
    const [typeTree, setTypeTree] = useState('all');
    const [listTree, setListTree] = useState([]);

    useEffect(() => {
        setListTree(products.slice(0, 8));
    }, [products]);

    useEffect(() => {
        if (typeTree === 'all') {
            setListTree(products.slice(0, 8));
            return;
        }
        const filterTree = products.slice(0, 8).filter((tree) => {
            return tree.type.includes(typeTree);
        });
        setListTree(filterTree);
    }, [typeTree]);

    return (
        <div className="menu-tree">
            <div className="container">
                <ul>
                    <li
                        className={`${typeTree === 'all' ? 'active' : ''}`}
                        onClick={() => {
                            setTypeTree('all');
                        }}
                    >
                        Tất cả
                    </li>
                    <li
                        className={`${typeTree === 'desk' ? 'active' : ''}`}
                        onClick={() => {
                            setTypeTree('desk');
                        }}
                    >
                        Cây để bàn
                    </li>
                    <li
                        className={`${typeTree === 'aquatic' ? 'active' : ''}`}
                        onClick={() => {
                            setTypeTree('aquatic');
                        }}
                    >
                        Cây thủy sinh
                    </li>
                    <li
                        className={`${typeTree == 'air' ? 'active' : ''}`}
                        onClick={() => {
                            setTypeTree('air');
                        }}
                    >
                        Cây lọc không khí
                    </li>
                </ul>
                <RowTreeCard col={3} colMd={4} colSm={6} trees={listTree} />
                <div className="row center" style={{ marginTop: '30px' }}>
                    <Link to="/product">
                        <button className="btn">XEM THÊM</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuTree;
