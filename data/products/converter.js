const fs = require("fs/promises");
const path = require("path");
const kebabCase = require("lodash/kebabCase");
const { writeFile } = require("fs");

const productsPath = path.resolve(__dirname, "./products.json");

fs.readFile(productsPath).then((products) => {
  const productsJSON = JSON.parse(products);

  productsJSON.forEach((product) => {
    console.log("Processing", product.title);
    writeFile(
      path.resolve(__dirname, kebabCase(product.title) + ".json"),
      JSON.stringify(product),
      (error) => {
        if (error) {
          console.log("An error has occurred ", error);
          return;
        }
        console.log("Successfully wrote", product.title);
      }
    );
  });
});
