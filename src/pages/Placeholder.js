import { useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import ProductAmount from '../components/ProductAmount';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';

import { CREATE_CART } from '../utils/mutations';

import { createCart } from '../services/create-cart'

function Placeholder() {
    // grab products from Storefront api and deconstructs the object
    const {data, loading, error} = useQuery(QUERY_PRODUCT);
    
    // returns a function to excute the graphql mutation
    const [cartInstance] = useMutation(CREATE_CART)

    // array of the product objects and if empty , empty array
    const productData = data?.products.edges || [];

    // creates cart on page load
    useEffect(() => {
       createCart(cartInstance);

     // cleanup to reduce memory 
       return () => console.log('bye')
    }, []);
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    
    return (
        <>
            <section className='product-grid'>
                {productData.map(info => (
                    <ProductCard key={info.node.title} {...info} />
                ))}
            </section>
            <section>
                <ProductAmount />
            </section>
        </>
    )
};

export default Placeholder