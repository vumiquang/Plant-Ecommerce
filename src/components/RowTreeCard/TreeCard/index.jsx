import React, { useState } from 'react';
import './treecard.scss';
import { Link } from 'react-router-dom';
import Rate from '../../Rate';
import { formatMoney } from '../../../util/formatMoney';

const TreeCard = ({ col, colMd, colSm, tree }) => {
    // const [rating, setRating] = useState(0);
    const _col = col !== 0 ? `col-${col}` : '';
    const _colMd = colMd !== 0 ? `col-md-${colMd}` : '';
    const _colSm = colSm !== 0 ? `col-sm-${colSm}` : '';

    return (
        <div className={`tree-card ${_col} ${_colMd} ${_colSm}`}>
            <div>
                <div className="wrap-card">
                    <div className="tree-card__img">
                        <img src={tree.img1} alt="" />
                    </div>
                    <div className="tree-card__star">
                        <Rate rating={tree.star} size={14}></Rate>
                    </div>
                    <Link
                        to={`/product/${tree.id}`}
                        className="tree-card__name"
                    >
                        {tree.name}
                    </Link>
                    <div className="tree-card__price">
                        {tree.sale !== '0' && (
                            <span className="price">
                                {formatMoney(tree.price)}
                            </span>
                        )}
                        <span className="sale">
                            {tree.sale !== '0'
                                ? formatMoney(tree.sale)
                                : formatMoney(tree.price)}
                        </span>
                    </div>
                    <div className="tree-card__action">
                        <Link to={`/product/${tree.id}`}>
                            <i className="bx bx-zoom-in"></i>
                        </Link>
                        <Link to="">
                            <i className="bx bx-cart"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreeCard;
