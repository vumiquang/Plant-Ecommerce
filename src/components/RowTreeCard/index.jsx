import React from 'react';
import PropTypes from 'prop-types';
import TreeCard from './TreeCard';

const RowTreeCard = ({ trees, col, colMd, colSm, ...props }) => {
    return (
        <div className="row wrap">
            {trees.map((tree) => {
                return (
                    <TreeCard
                        tree={tree}
                        col={col}
                        colMd={colMd}
                        colSm={colSm}
                        {...props}
                        key={tree.id}
                    />
                );
            })}
        </div>
    );
};

RowTreeCard.propTypes = {
    col: PropTypes.number.isRequired,
    colMd: PropTypes.number.isRequired,
    colSm: PropTypes.number.isRequired,
    trees: PropTypes.array.isRequired,
};

export default RowTreeCard;
