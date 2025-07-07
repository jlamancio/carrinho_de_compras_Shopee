import createItem from './item.js';

export async function addItem(userCart, item) {
   userCart.push(item);
   return userCart;
}

export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    
    if (index != -1) {
        const [removedItem] = userCart.splice(index, 1);
        console.log(`\nItem removed: ${removedItem.name}`);
        const newTotal = calculateTotal(userCart);
        console.log(newTotal);
    } else {
        console.log(`\nItem "${name}" não encontrado no carrinho.\n`); 
    }
    return userCart;
}

export async function excludeItemByIndex(userCart, index){
    const removedItem = index -1;
    if (removedItem >=0 && removedItem < userCart.length){
        const [removeItem] = userCart.splice(removedItem, 1);
        console.log(`\nItem "${removedItem.name}" removido pelo índice ${index}.\n`);
        
        const newTotal = await calculateTotal(userCart);
        console.log(`\nNovo Total do Carrinho: R$ ${newTotal.toFixed(2)}\n`);
        return userCart;
    } else {
        console.log(`\n❌ Erro: Índice ${index} inválido. Item não pode ser removido.\n`);
        return userCart;
    }
}


export async function changeItemByQuantity(userCart, itemToChange) {
  const indexFound = userCart.findIndex((product) => product.name === itemToChange.name);

  if (indexFound === -1) {
    console.log(`\nItem "${itemToChange.name}" não encontrado no carrinho para exclusão\n`);
    return userCart;
  }

  if (userCart[indexFound].quantity > 1) {
    console.log(`\nDiminuindo quantidade de "${itemToChange.name}" de ${userCart[indexFound].quantity} para ${userCart[indexFound].quantity - 1}.\n`);
    userCart[indexFound].quantity -= 1;
    await calculateTotal(userCart);
    return userCart;
  } 
  else if (userCart[indexFound].quantity === 1) {
    console.log(`\nItem "${itemToChange.name}" tem apenas 1 unidade. Removendo completamente do carrinho.\n`);
    userCart = await deleteItem(userCart, itemToChange.name);
    return userCart;
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
            ${index + 1}. ${item.name} - R$ ${item.price} x ${item.quantity}: Subtotal  ${item.subtotal()}`);
        });
    }       
   
}
