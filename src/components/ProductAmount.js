import { useQuery } from '@apollo/client';
import { QUERY_CART } from '../utils/queries';

const ProductAmount = () => {

    let { data, loading } = useQuery(QUERY_CART, {
        variables: { id: localStorage.getItem('cartId') },
        pollInterval: 500
    });

    console.log(data)

    let cartPrice = 0;

    if (!loading) {
       cartPrice = Math.floor(data.cart.cost.checkoutChargeAmount.amount)
    }
     
    return (
        <div className='discount-container'>
            <div className='discount-title'>
                <p>Add $100 to save 10%</p>
            </div>
            <div className='price-container'>
                <div className='bdl-price'>
                    <p>Bundle Price</p>
                    <p>${cartPrice}</p>
                </div>
                <div className='bdl-saving'>
                    <p>Your Savings</p>
                    <p>$0</p>
                </div>
            </div>
            <div className='pb'>
                <div className='inside-pb' style={{ width: `${(cartPrice/175) * 100}%` }}></div>
            </div>
        </div>
    )
};

export default ProductAmount;