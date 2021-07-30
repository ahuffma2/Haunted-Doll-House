const { Product } = require("../models");

const productData = [
  {
    product_name: "Card 1",
    price: 34.99,
    stock: 14,
    description: "Blank",
  },
  {
    product_name: "Card 2",
    price: 9.99,
    stock: 25,
    description: "Blank",
  },
  {
    product_name: "Card 3",
    price: 24.99,
    stock: 12,
    description: "Blank",
  },
  {
    product_name: "Card 4",
    price: 19.99,
    stock: 15,
    description: "Blank",
  },
  {
    product_name: "Card 5",
    price: 12.99,
    stock: 22,
    description: "Blank",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
