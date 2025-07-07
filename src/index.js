import * as cartService from './services/cart.js';
import createItem from './services/item.js';

let myCart = [];
let myWhishList = [];

console.log('Welcome to the your Shopee Cart\n');
const item1 = await createItem('hotwheels ferrari', 20.00, 1);
const item2 = await createItem('hotwheels lamburgini', 39.00, 2);
const item3 = await createItem('Darth Vader', 150.00, 2);

myCart = await cartService.addItem(myCart, item1);
myCart = await cartService.addItem(myCart, item2);
myCart = await cartService.addItem(myCart, item3);

// await cartService.excludeItemByIndex(myCart, 4);

console.log("\n--- MyCart ANTES de changeItemByQuantity ---");
console.log(myCart); // Adicione esta linha

myCart = await cartService.changeItemByQuantity(myCart, item1);

console.log("\n--- MyCart DEPOIS de changeItemByQuantity ---");
console.log(myCart); // Adicione esta linha




// await cartService.deleteItem(myCart,'NomeQueNãoExisteNoCarrinhow');
// await cartService.deleteItem(myCart, item1.name);


await cartService.displayCart(myCart);
