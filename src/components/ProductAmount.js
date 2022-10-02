
function ProductAmount() {

    let num = 0

    let price = (num / 175) * 100


    return (
        <div className='discount-container'>
            <div className='discount-title'>
                <p>Add $100 to save 10%</p>
            </div>
            <div className='price-container'>
                <div className='bdl-price'>
                    <p>Bundle Price</p>
                    <p>$0</p>
                </div>
                <div className='bdl-saving'>
                    <p>Your Savings</p>
                    <p>$0</p>
                </div>
            </div>
            <div className='pb'>
                <div className='inside-pb' style={{ width: `${price}%` }}></div>
            </div>
        </div>
    )
};

export default ProductAmount;