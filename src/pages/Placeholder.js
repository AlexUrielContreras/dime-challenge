import { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';
import ProductAmount from '../components/ProductAmount';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';

import { useMutation } from '@apollo/client';
import { CREATE_CART } from '../utils/mutations';

import { createCart } from '../services/create-cart'

function Placeholder() {
    // grab products from Storefront api and deconstructs the object
    const {data, loading, error} = useQuery(QUERY_PRODUCT);

    // array of the product objects and if empty , empty array
    const productData = data?.products.nodes || [];

    console.log(productData)

    const [cartInstance] = useMutation(CREATE_CART)

    // creates cart on page load
    useEffect(() => {
       createCart(cartInstance);

     // cleanup to reduce memory 
       return () => console.log('bye')
    }, []);

    const [price, setPrice] = useState(0);
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    
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