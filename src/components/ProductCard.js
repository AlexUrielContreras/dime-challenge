import { useMutation } from '@apollo/client';
import { ADD_TO_CART } from '../utils/mutations';



function ProductCard({node, setPrice }) {

    const { title, featuredImage, variants } = node
    const [addToCart] = useMutation(ADD_TO_CART);
    
    const price = variants.edges[0].node.priceV2.amount;
    const id = variants.edges[0].node.id

    const grabPrice = async (e) => {
      
        const productId = e.target.dataset.productid

        try {
            const response  = await addToCart({
                variables: {
                    cartId: localStorage.getItem('cartId'),
                    lines: {
                        merchandiseId: productId
                    },
                }
            });
          
        } catch (err) {
            console.error(err)
        }
       
    }

    return (
        <div className='product-card' >
            <div>
                <img src={featuredImage.url} alt='beauty products'/>
            </div>

            <div className='product-info'>
                <p>
                    {title}
                </p>
                <div className='product-review'>
                   
                </div>
                <p className='product-price'> 
                    ${Math.floor(price)}
                </p>
         
                <button className='atb-btn' onClick={grabPrice} data-productid={id}>Add to Bundle</button>
            </div>
        </div>
    )
};

export default ProductCard;