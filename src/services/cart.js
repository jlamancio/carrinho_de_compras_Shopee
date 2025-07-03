export async function addItem(userCart, item){
   userCart.push(item);
}

export async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1){
        userCart.splice(index, 1);
        console.log(`\nItem removed: ${index}\n`);
    }
}


export async function removeItem(userCart, index){
    const deleteIndex = index -1;

    if(index >= 0 && userCart.length){
        userCart.splice(deleteIndex, 1)
    }

}

/*
export async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((produto) => produto.name === item.name)
    if (indexFound === -1){
        console.log('Item não encontrado');
        return;
    }

    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    } 
    if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound -1);
        return;
    }

}
*/
export async function calculateTotal(userCart){
    // return userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log('\n**********  Shopee cart total is: ********** ');
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🎁Total: ${ result }\n`);
}

export async function displayCart(userCart){
    console.log('Shopee cart active List');

    userCart.forEach((item, index) => {
        console.log(`
            ${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity}: Subtotal  ${item.subtotal()}`);
    });
}