import { useQuery } from '@apollo/client';
import { QUERY_CART } from '../utils/queries';

const ProductAmount = () => {

    let { data, loading } = useQuery(QUERY_CART, {
        variables: { id: localStorage.getItem('cartId') },
        pollInterval: 200
    });

    let cartPrice = 0;
    let discountedPrice; 
    let savings = 0
    

    if (!loading) {
       cartPrice = Math.floor(data.cart.cost.checkoutChargeAmount.amount)
    }

    if (cartPrice >= 100) {
        discountedPrice = cartPrice - ((cartPrice/100) * 10)
        savings = cartPrice - discountedPrice;

        cartPrice -= savings
    }
    
    return (
        <div className='discount-container'>
            <div className='discount-title'>
                <p>Add <strong>$100</strong> to save <strong>10%</strong></p>
            </div>
            <div className='price-container'>
                <div className='bdl-price'>
                    <p>Bundle Price</p>
                    <p className='amount'>${Math.ceil(cartPrice)}</p>
                </div>
                <div className='bdl-saving'>
                    <p>Your Savings</p>
                    <p className='amount'>${Math.ceil(savings)}</p>
                </div>
            </div>
            <div className='pb'>
                <div className='inside-pb' style={{ width: `${(cartPrice/165) * 100}%` }}></div>
                <span className='first2'></span><span className='last2'></span>   
            </div>
            <div className='bar-percent'><p>10%</p><p>15%</p><p>20%</p><p>25%</p></div>

        </div>
    )
};

export default ProductAmount;