const express = require("express");
const {getProducts, addProduct, updateProduct, getProduct, deleteProduct} = require("./product.controller")

const router = express.Router();

router.get("/",getProducts);
router.post("/",addProduct);
router.put("/:id", updateProduct);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
