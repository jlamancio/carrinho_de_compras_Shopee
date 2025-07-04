import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhishList = [];

console.log('Welcome to the your Shopee Cart\n');
const item1 = await createItem('hotwheels ferrari', 20.00, 1);
const item2 = await createItem('hotwheels lamburgini', 39.00, 2);
const item3 = await createItem('Darth Vader', 150.00, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.deleteItem(myCart,item3.name);



// await cartService.displayCart(myCart);
