import { getParam, loadHeaderFooter } from "/wdd330-w2-bonus/src/js/utils.mjs";
import ExternalServices from "/wdd330-w2-bonus/src/js/ExternalServices.mjs";
import ProductDetails from "/wdd330-w2-bonus/src/js/ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
