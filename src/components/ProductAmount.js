import { useRef, useEffect, useState } from 'react';

function ProductAmount(props) {
    const { price } = props;
    const prevPrice = useRef(0);
    useEffect(() => {
        prevPrice.current += price
    })

    let bag = prevPrice.current + price
    
    return (
        <div className='discount-container'>
            <div className='discount-title'>
                <p>Add $100 to save 10%</p>
            </div>
            <div className='price-container'>
                <div className='bdl-price'>
                    <p>Bundle Price</p>
                    <p>${bag}</p>
                </div>
                <div className='bdl-saving'>
                    <p>Your Savings</p>
                    <p>${0}</p>
                </div>
            </div>
            <div className='pb'>
                <div className='inside-pb' style={{ width: `${(bag/175) * 100}%` }}></div>
            </div>
        </div>
    )
};

export default ProductAmount;