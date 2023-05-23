import { getLocalStorage, loadHeaderFooter } from "/wdd330-w2-bonus/src/js/utils.mjs";
import ShoppingCart from "/wdd330-w2-bonus/src/js/ShoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.init();
if (cart.total > 0) {
  // show our checkout button and total if there are items in the cart.
  document.querySelector(".list-footer").classList.remove("hide");
}
