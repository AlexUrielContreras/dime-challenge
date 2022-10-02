import BundleButton from './BundleButton';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../service/queries';

function ProductCard() {
    const {data, loading, error} = useQuery(QUERY_PRODUCT);
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    console.log(data)

    return (
        <div className='product-card'>
            <div></div>
            <BundleButton />
        </div>
    )
};

export default ProductCard;