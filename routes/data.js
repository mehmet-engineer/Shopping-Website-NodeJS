class ProductDatabase {
    constructor(products) {
        this.products = products;
    }

    add_product(name, price, image, description) {
        this.products.push({
            name: name,
            price: price,
            image: image,
            description: description
        });
    }

    get_products() {
        return this.products;
    }
}

var products = [
    { 
        name: "Iphone 7S White", 
        price: 4200, 
        image: "1.jpg", 
        description: "Smart Phone"
    },
    { 
        name: "Iphone 7S 256GB", 
        price: 4300, 
        image: "1.jpg", 
        description: "Smart Phone"
    },
    { 
        name: "Iphone 7S Black", 
        price: 4400, 
        image: "2.jpg", 
        description: "Smart Phone"
    },
    { 
        name: "Samsung Galaxy S9", 
        price: 4000, 
        image: "3.jpg", 
        description: "Smart Phone"
    },
    { 
        name: "Samsung Galaxy J8", 
        price: 4500, 
        image: "4.jpg", 
        description: "Smart Phone"
    }
];

product_data = new ProductDatabase(products);

module.exports.product_data = product_data;