async function addItem(userCart, item){
   userCart.push(item);

}


async function deleteItem(userCart, name){
    // lógica
}


async function removeItem(userCart, index){
    // lógica
}



async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

export default { addItem, deleteItem, removeItem, calculateTotal };