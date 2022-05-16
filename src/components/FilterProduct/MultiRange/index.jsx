import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './multiRangeSlider.scss';

const MultiRangeSlider = ({ min, max, onChange, minMaxCurrent }) => {
    const [minVal, setMinVal] = useState(minMaxCurrent.min);
    const [maxVal, setMaxVal] = useState(minMaxCurrent.max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        //
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        //
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        setMinVal(minMaxCurrent.min);
        setMaxVal(minMaxCurrent.max);
    }, [minMaxCurrent]);

    const onChangeMinValue = (event) => {
        const value = Math.min(+event.target.value, maxVal - 1);
        setMinVal(value);
        event.target.value = value.toString();
        onChange({ min: minVal, max: maxVal });
    };
    const onChangeMaxValue = (event) => {
        const value = Math.max(+event.target.value, minVal + 1);
        setMaxVal(value);
        event.target.value = value.toString();
        onChange({ min: minVal, max: maxVal });
    };
    return (
        <div className="slider-wrap">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                ref={minValRef}
                onChange={onChangeMinValue}
                className={`thumb thumb--zindex-3 ${
                    minVal > max - 100 ? 'thumb--zindex-5' : ''
                }`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                ref={maxValRef}
                onChange={onChangeMaxValue}
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
