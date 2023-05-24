const fs = require("fs");

const products = [];


products.push({
	id: 1,
	type: "Type 1",
	brand: "Brand 1",
	price: 10.99,
});

products.push({
	id: 2,
	type: "Type 2",
	brand: "Brand 2",
	price: 19.99,
});


fs.writeFileSync("products.json", JSON.stringify(products));
