import React, { useState } from 'react';
import './filter.scss';
import MultiRangeSlider from './MultiRange';
import { formatMoney } from '../../util/formatMoney';
import { initFilter } from '../../pages/Product';

const FilterProduct = ({ showFilter, setShowFilter, filter, setFilter }) => {
    const setFilterType = (filterType, name) => {
        setFilter({
            ...filter,
            [filterType]: {
                ...filter[filterType],
                [name]: !filter[filterType][name],
            },
        });
    };

    const resetFilter = () => {
        setFilter(initFilter);
    };
    return (
        <div>
            <div
                className={`filter-back ${showFilter ? 'active' : ''}`}
                onClick={() => {
                    setShowFilter(!showFilter);
                }}
            ></div>
            <div className={`product-filter ${showFilter ? 'active' : ''}`}>
                <h3 className="product-filter__title">BỘ LỌC SẢN PHẨM</h3>
                <div className="product-filter__menu">
                    <h4>Danh mục</h4>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.menu.desk}
                            onChange={() => {
                                setFilterType('menu', 'desk');
                            }}
                        />
                        <p>Cây để bàn</p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.menu.aquatic}
                            onChange={() => {
                                setFilterType('menu', 'aquatic');
                            }}
                        />
                        <p>Cây thủy sinh</p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.menu.air}
                            onChange={() => {
                                setFilterType('menu', 'air');
                            }}
                        />
                        <p>Cây lọc không khí</p>
                    </div>
                </div>
                <div className="product-filter__size">
                    <h4>Kích thước</h4>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.size.small}
                            onChange={() => {
                                setFilterType('size', 'small');
                            }}
                        />
                        <p>Nhỏ</p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.size.medium}
                            onChange={() => {
                                setFilterType('size', 'medium');
                            }}
                        />
                        <p>Vừa</p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.size.big}
                            onChange={() => {
                                setFilterType('size', 'big');
                            }}
                        />
                        <p>Lớn</p>
                    </div>
                </div>
                <div className="product-filter__color">
                    <h4>Màu sắc</h4>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.color.red}
                            onChange={() => {
                                setFilterType('color', 'red');
                            }}
                        />
                        <p>Đỏ</p>
                        <div className="circle bg-red"></div>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.color.yellow}
                            onChange={() => {
                                setFilterType('color', 'yellow');
                            }}
                        />
                        <p>Vàng</p>
                        <div className="circle bg-yellow"></div>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.color.green}
                            onChange={() => {
                                setFilterType('color', 'green');
                            }}
                        />
                        <p>Xanh</p>
                        <div className="circle bg-green"></div>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={filter.color.purple}
                            onChange={() => {
                                setFilterType('color', 'purple');
                            }}
                        />
                        <p>Tím</p>
                        <div className="circle bg-purple"></div>
                    </div>
                </div>
                <div className="product-filter__price">
                    <h4>Giá cả</h4>
                    <div>
                        <div>
                            <span className="start-price">
                                {formatMoney(filter.price.min + '')}
                            </span>
                            <span>~</span>
                            <span className="end-price">
                                {formatMoney(filter.price.max + '')}
                            </span>
                        </div>
                        <div>
                            <MultiRangeSlider
                                min={0}
                                max={1000000}
                                minMaxCurrent={filter.price}
                                onChange={({ min, max }) => {
                                    if (
                                        filter.price.min !== min ||
                                        filter.price.max !== max
                                    )
                                        setFilter({
                                            ...filter,
                                            price: { min: min, max: max },
                                        });
                                }}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-small" onClick={resetFilter}>
                    Bỏ lọc
                </button>
            </div>
        </div>
    );
};

export default FilterProduct;
