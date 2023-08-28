const isAuth = require("./auth");
const CategoryRoutes = require("./category");
const ProductRoutes = require("./product");
const HistoryRoutes = require("./history");

module.exports = [isAuth, CategoryRoutes, ProductRoutes, HistoryRoutes];
