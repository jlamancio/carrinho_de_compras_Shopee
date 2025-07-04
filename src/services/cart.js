import createItem from './item.js';

export async function addItem(userCart, item) {
    return userCart.push(item);
}

export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if (index != -1) {
        const [removedItem] = userCart.splice(index, 1);
        console.log(`\nItem removed: ${removedItem.name}`);

        const newTotal = await calculateTotal(userCart);
    } else {
        console.log(`\nItem $"{name}" não encontrado no carrinho.\n`);
    }
    return userCart;
}

export async function calculateTotal(userCart) {
    console.log('\n**********  Shopee cart total is: ********** ');

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🎁Total: R$ ${result.toFixed(2)}\n`);

    return result;
}

export async function displayCart(userCart) {
    console.log('\n ####### Shopee cart active List ###### \n');

    if (userCart.length === 0){
        console.log(`Your cart is empty.`)
    } 
    else {
        userCart.forEach((item, index) => {
        console.log(`
            ${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}: Subtotal  ${item.subtotal()}`);
        });
    }       

    const currentTotal = calculateTotal(userCart);
   
}
