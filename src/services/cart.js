export async function addItem(userCart, item){
   userCart.push(item);
}

export async function deleteItem(userCart, name){
    // lógica
}

export async function removeItem(userCart, index){
    // lógica
}

export async function calculateTotal(userCart){
    // return userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

