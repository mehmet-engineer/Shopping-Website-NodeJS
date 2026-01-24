const categories = [
    {
        id: 1,
        name: "Smart Phones",
        description: "IOS and Android Smart Phones"
    },
    {
        id: 2,
        name: "Laptops",
        description: "Personal and Gaming Laptops"
    },
    {
        id: 3,
        name: "Earphones",
        description: "Earbuds and Earphones"
    }
];

function get_category_name_by_id(category_id) {
    for (let category of categories) {
        if (category.id === category_id) {
            return category.name;
        }
    }
};

class product {
    constructor(product_id, category_id, name, price, image, description) {
        this.product_id = product_id;
        this.category_id = category_id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;

        this.category_name = get_category_name_by_id(category_id);
    }
};

class ProductDatabase {
    constructor(products) {
        this.products = products;
    }

    add_product(product) {
        this.products.push(product);
    }

    get_products() {
        return this.products;
    }

    get_product_by_id(product_id) {
        for (let product of this.products) {
            if (product.product_id === product_id) {
                return product;
            }
        }
    }

    get_products_by_category(category_id) {
        let categorized_products = [];
        for (let product of this.products) {
            if (product.category_id === category_id) {
                categorized_products.push(product);
            }
        }
        return categorized_products;
    }

    edit_product(product_id, updated_product) {
        let product = this.get_product_by_id(product_id);
        product.category_id = updated_product.category_id;
        product.category_name = get_category_name_by_id(updated_product.category_id);
        product.name = updated_product.name;
        product.price = updated_product.price;
        product.image = updated_product.image;
        product.description = updated_product.description;
    }

    delete_product(product_id) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id === product_id) {
                this.products.splice(i, 1);
                break;
            }
        }
    }

};

var products = [
    new product(
        product_id = "50001",
        category_id = 1,
        name = "Iphone 7S White", 
        price = 4200, 
        image = "1.jpg", 
        description = "Smart Phone"
    ),
    new product(
        product_id = "50002",
        category_id = 1,
        name = "Iphone 7S 256GB", 
        price = 4300,
        image = "1.jpg", 
        description = "Smart Phone"
    ),
    new product(
        product_id = "50003",
        category_id = 1,
        name = "Iphone 7S Black", 
        price = 4400, 
        image = "2.jpg", 
        description = "Smart Phone"
    ),
    new product(
        product_id = "50004",
        category_id = 1,
        name = "Samsung Galaxy S9", 
        price = 4000, 
        image = "3.jpg", 
        description = "Smart Phone"
    ),
    new product(
        product_id = "50005",
        category_id = 1,
        name = "Samsung Galaxy J8", 
        price = 4500, 
        image = "4.jpg", 
        description = "Smart Phone"
    )
];

module.exports.product = product;
module.exports.categories = categories;
module.exports.get_category_name_by_id = get_category_name_by_id;
module.exports.productDatabase = new ProductDatabase(products);
