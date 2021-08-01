const { Product } = require("../models");

const productData = [
  {
    name: "Card 1",
    price: 34.99,
    description: "Blank",
  },
  {
    name: "Card 2",
    price: 9.99,
    description: "Blank",
  },
  {
    name: "Card 3",
    price: 24.99,
    description: "Blank",
  },
  {
    name: "Card 4",
    price: 19.99,
    description: "Blank",
  },
  {
    name: "Card 5",
    price: 12.99,
    description: "Blank",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
