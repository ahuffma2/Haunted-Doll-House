const { Artifact } = require("../models");

const productData = [
  {
    "name": "Card 1",
    "price": 34.99,
    "description": "One of the creepiest dolls ever found in New Orleans, this was one of the first to ever have voodoo magic.",
     "filename" : 'product-example-1',
  },
  {
    name: "Card 2",
    "price": 9.99,
    "description": "Found in the deep swamps of Georgia, it is said that those that have come into contact with this doll have become its prisoner at one point in time.",
    "filename" : "product-example-2",
  },
  {
    name: "Card 3",
    "price": 24.99,
    "description": "Blank",
    "filename" : "product-example-3",
  },
  {
    name: "Card 4",
    "price": 19.99,
    "description": "Blank",
    "filename" : "product-example-4",
  },
  {
    name: "Card 5",
    "price": 12.99,
    "description": "Blank",
    "filename" : "product-example-5",
  },
  {
    name: "Card 6",
    "price": 23.99,
    "description": "Blank",
    "filename" : "product-example-6",
  },
  {
    name: "Card 7",
    "price": 14.99,
    "description": "Blank",
    "filename" : "product-example-7",
  },
  {
    name: "Card 8",
    "price": 25.99,
    "description": "Blank",
    "filename" : "product-example-8",
  },
  {
    name: "Card 9",
    "price": 21.99,
    "description": "Blank",
    "filename" : "product-example-9",
  },
  {
    name: "Card 10",
    "price": 20.99,
    "description": "Blank",
    "filename" : "product-example-10",
  },
  {
    name: "Card 11",
    "price": 13.99,
    "description": "Blank",
    "filename" : "product-example-11",
  },
  {
    name: "Card 12",
    "price": 28.99,
    "description": "Blank",
    "filename" : "product-example-12",
  },
  {
    name: "Card 13",
    "price": 16.99,
    "description": "Blank",
    "filename" : "product-example-13",
  },
];

const seedArtifacts = () => Product.bulkCreate(artifactData);

module.exports = seedArtifacts;
