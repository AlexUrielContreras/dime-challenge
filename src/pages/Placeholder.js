import ProductCard from '../components/ProductCard';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../service/queries';

function Placeholder() {
    const {data, loading, error} = useQuery(QUERY_PRODUCT);
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    const productData = data?.products.nodes || [];

    return (
        <section className='product-grid'>
            {productData.map(info => (
                <ProductCard key={info.title} {...info} />
            ))}
        </section>
    )
};

export default Placeholder