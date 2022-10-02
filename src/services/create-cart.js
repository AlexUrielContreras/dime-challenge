export const createCart = async (cartFun) => {
    try {
        const { data } = await cartFun()
        console.log(data)
        window.localStorage.setItem('cartId', data?.cartCreate.cart.id);
        window.localStorage.setItem('checkoutUrl', data?.cartCreate.cart.checkoutUrl)
    } catch (err) {
        console.error(err)
    }
}