import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'


//юзверь
const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: {type: DataTypes.STRING, defaultValue: "USER" },

});

//корзина
const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

//связь корзины с продуктами
const BasketProducts = sequelize.define('basket_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

//товар
const Products = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING, unique: true,allowNull: false },
    description: { type: DataTypes.STRING },
    image: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
});

//категории товаров

const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false},
});

//Брэнд товара
const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false},
});

const CategoriesBrand = sequelize.define('categories_brand',{
    id: { type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProducts);
BasketProducts.belongsTo(Basket);

Categories.hasMany(Products);
Products.belongsTo(Categories);

Brand.hasMany(Products);
Products.belongsTo(Brand);

Products.hasMany(BasketProducts);
BasketProducts.belongsTo(Products);

Categories.belongsToMany(Brand, { through: CategoriesBrand});
Brand.belongsToMany(Categories, {through: CategoriesBrand});

export {Basket, BasketProducts, Brand, Categories, CategoriesBrand, Products, User };

