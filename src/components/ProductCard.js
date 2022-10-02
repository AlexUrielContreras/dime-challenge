import BundleButton from './BundleButton';

function ProductCard({ title, featuredImage, variants }) {

    const price = variants.nodes[0].priceV2.amount;

    return (
        <div className='product-card'>
            <div>
                <img src={featuredImage.url} alt='beauty products'/>
            </div>

            <div className='product-info'>
                <p>
                    {title}
                </p>

                <p className='product-price'> 
                    ${Math.floor(price)}
                </p>
         
                <BundleButton text={`Add to Bundle`}/>
            </div>
        </div>
    )
};

export default ProductCard;