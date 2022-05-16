import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Banner from '../components/Banner';
import FilterProduct from '../components/FilterProduct';
import ProductShow from '../components/ProductShow';

export const initFilter = {
    menu: {
        desk: false,
        aquatic: false,
        air: false,
    },
    size: {
        small: false,
        medium: false,
        big: false,
    },
    color: {
        green: false,
        red: false,
        yellow: false,
        purple: false,
    },
    price: {
        min: 0,
        max: 1000000,
    },
};
const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const trees = useSelector((state) => state.products.products);
    const [showTrees, setShowTrees] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState(initFilter);
    useEffect(() => {
        const type = searchParams.get('type');
        if (type !== null && ['desk', 'air', 'aquatic'].includes(type)) {
            setFilter({
                ...initFilter,
                menu: { ...initFilter.menu, [type]: true },
            });
        }
    }, [searchParams]);

    useEffect(() => {
        let t = trees.filter(isTreeFit);
        setShowTrees(t);
    }, [filter, trees]);

    const isTreeFit = (tree) => {
        //
        //
        let isType = false;
        let isSize = false;
        let isColor = false;
        let isPrice = false;
        // check type
        for (let type in filter.menu) {
            if (filter.menu[type]) {
                if (tree.type.indexOf(type) !== -1) {
                    isType = true;
                    break;
                }
            }
        }
        !filter.menu.desk &&
            !filter.menu.aquatic &&
            !filter.menu.air &&
            (isType = true);

        //check size
        for (let type in filter.size) {
            if (filter.size[type]) {
                if (Number(tree[type + 'count']) > 0) {
                    isSize = true;
                    break;
                }
            }
        }
        !filter.size.small &&
            !filter.size.medium &&
            !filter.size.big &&
            (isSize = true);
        //check color
        for (let type in filter.color) {
            if (filter.color[type]) {
                if (tree.color.indexOf(type) !== -1) {
                    isColor = true;
                    break;
                }
            }
        }
        !filter.color.green &&
            !filter.color.red &&
            !filter.color.yellow &&
            !filter.color.purple &&
            (isColor = true);
        //check price
        const price = tree.sale === '0' ? tree.price : tree.sale;
        if (
            Number(price) >= filter.price.min &&
            Number(price) <= filter.price.max
        ) {
            isPrice = true;
        } else {
            isPrice = false;
        }
        if (isType && isSize && isColor && isPrice) return true;
        else return false;
    };

    return (
        <div className="product">
            <Banner title="Sản phẩm" />
            <div className="container">
                <FilterProduct
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                    filter={filter}
                    setFilter={setFilter}
                />
                <ProductShow trees={showTrees} setShowFilter={setShowFilter} />
            </div>
        </div>
    );
};

export default Product;
