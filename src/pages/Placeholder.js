import { useState } from 'react'
import ProductCard from '../components/ProductCard';
import ProductAmount from '../components/ProductAmount';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../service/queries';

function Placeholder() {
    const {data, loading, error} = useQuery(QUERY_PRODUCT);
    const [price, setPrice] = useState(0) ;
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    const productData = data?.products.nodes || [];

    return (
        <>
        <section className='product-grid'>
            {productData.map(info => (
                <ProductCard key={info.title} {...info} setPrice={setPrice}/>
            ))}
        </section>
        <section>
            <ProductAmount price={price}/>
        </section>
        </>
    )
};

export default Placeholder