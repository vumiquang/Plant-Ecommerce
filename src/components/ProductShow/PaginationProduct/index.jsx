import React, { useEffect, useState } from 'react';
import './page.scss';
const PaginationProduct = ({ perPage, total, onChangePage }) => {
    const [page, setPage] = useState(1);
    const totalPage = Math.ceil(total / perPage);

    const renderPage = () => {
        let pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <div
                    key={i + ''}
                    className={`pagination__page ${i === page ? 'active' : ''}`}
                    onClick={() => {
                        setPage(i);
                    }}
                >
                    {i}
                </div>
            );
        }
        return pages;
    };
    useEffect(() => {
        const start = (page - 1) * perPage;
        const end = page === totalPage ? total : start + perPage;
        onChangePage(start, end);
    }, [page]);
    const prevPage = () => {
        if (page > 1) {
            setPage((oldPage) => oldPage - 1);
        }
    };
    const nextPage = () => {
        if (page < totalPage) {
            setPage((oldPage) => oldPage + 1);
        }
    };
    if (total === 0) return <></>;
    return (
        <div className="pagination">
            <div className="pagination__wrap">
                <div
                    className={`pagination__arrow arrow-left ${
                        page === 1 ? 'disable' : ''
                    }`}
                    onClick={() => {
                        prevPage();
                    }}
                ></div>
                {renderPage()}
                <div
                    className={`pagination__arrow arrow-right ${
                        page === totalPage ? 'disable' : ''
                    }`}
                    onClick={() => {
                        nextPage();
                    }}
                ></div>
            </div>
        </div>
    );
};

export default PaginationProduct;
