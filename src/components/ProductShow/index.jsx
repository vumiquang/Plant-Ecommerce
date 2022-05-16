import React, { useEffect, useState } from 'react';
import './product-show.scss';
import RowTreeCard from '../RowTreeCard';
import PaginationProduct from './PaginationProduct';
const ProductShow = ({ trees, setShowFilter }) => {
    const [subTrees, setSubTree] = useState(trees);
    const page = { treePerPage: 6, total: trees.length };
    const onChangePage = (start, end) => {
        setSubTree(trees.slice(start, end));
    };
    useEffect(() => {
        setSubTree(trees.slice(0, page.treePerPage));
    }, [trees]);
    return (
        <div className="product-show">
            <div className="product-show__head">
                <p>Tìm thấy {trees.length} sản phẩm</p>
                <i
                    className="bx bx-filter-alt product-show__filter-icon"
                    onClick={() => {
                        setShowFilter(true);
                    }}
                ></i>
            </div>
            <div className="product-show__body">
                <RowTreeCard col={4} colMd={4} colSm={6} trees={subTrees} />
            </div>
            <PaginationProduct
                perPage={page.treePerPage}
                total={trees.length}
                onChangePage={onChangePage}
            />
        </div>
    );
};

export default ProductShow;
