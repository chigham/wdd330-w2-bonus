import { loadHeaderFooter, getParam } from "/wdd330-w2-bonus/src/js/utils.mjs";
import ExternalServices from "/wdd330-w2-bonus/src/js/ExternalServices.mjs";
import ProductList from "/wdd330-w2-bonus/src/js/ProductList.mjs";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ExternalServices(category);
const element = document.querySelector(".product-list");
//console.log(category);
//console.log(dataSource);
//console.log(element);
const listing = new ProductList(category, dataSource, element);

listing.init();
