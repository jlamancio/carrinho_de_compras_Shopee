import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWhishList = [];

console.log('Welcome to the your Shopee Cart\n');

const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamburgini', 39.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

//await cartService.deleteItem(myCart, item2.name);

