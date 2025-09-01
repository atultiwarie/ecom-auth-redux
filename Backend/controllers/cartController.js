const { response } = require("express");
const Cart = require("../models/cart");
const Product = require("../models/product");

// Get user Cart
exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate("items.product");
    if (!cart)
      return res.status(200).json({ message: "Cart is empty", items: [] });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to cart

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [
          {
            product: productId,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
    }else{
        const itemIndex = cart.items.findIndex(
            (item)=>item.product.toString()===productId
        )
        if(itemIndex>-1){
            cart.items[itemIndex].quantity+=quantity;

        }else{
            cart.items.push({
                product: productId,
                quantity,
            })
        }
        cart.totalPrice = await calculateTotal(cart.items);
    }
    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





// helper calculating function
const calculateTotal = async (items) => {
  let total = 0;
  for (const item of items) {
    const product = await Product.findById(item.product);
    total += product.price * item.quantity;
  }
  return total;
};