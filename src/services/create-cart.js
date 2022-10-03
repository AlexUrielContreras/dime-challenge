export const createCart = async (cartInstance) => {
    try {
        const { data } = await cartInstance()
        console.log(data)
        window.localStorage.setItem('cartId', JSON.stringify(data.cartCreate.cart.id));
        window.localStorage.setItem('checkoutUrl', JSON.stringify(data.cartCreate.cart.checkoutUrl))
    } catch (err) {
        console.error(err)
    }
}