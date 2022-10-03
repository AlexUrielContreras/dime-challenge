function ProductCard({ node, setPrice }) {
    const { title, featuredImage, variants } = node
    
    const price = variants.edges[0].node.priceV2.amount;

    const grabPrice = (e) => {
      setPrice(Math.floor(e.target.dataset.price))  
    }

    return (
        <div className='product-card'>
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
         
                <button className='atb-btn' onClick={grabPrice} data-price={price}>Add to Bundle</button>
            </div>
        </div>
    )
};

export default ProductCard;