import BundleButton from './BundleButton';

function ProductCard({ title, featuredImage, variants }) {
    
    const price = variants.nodes[0].priceV2.amount

    return (
        <div className='product-card'>
            <div>
                <img src={featuredImage.url} alt='beauty products'/>
            </div>

            <div>
                {title}
            </div>

            <div> 
                ${Math.floor(price)}
            </div>

            <BundleButton text={`Add to Bundle`}/>
        </div>
    )
};

export default ProductCard;