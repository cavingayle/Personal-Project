DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS orderdetails;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS productoptions;
DROP TABLE IF EXISTS productcategories;
DROP TABLE IF EXISTS optiontable;
DROP TABLE IF EXISTS optiongroups;
DROP TABLE IF EXISTS cart;

CREATE TABLE IF NOT EXISTS cart(
cartID serial PRIMARY KEY,
cartTotal FLOAT,
cartItems TEXT
);

CREATE TABLE IF NOT EXISTS users(
userID serial PRIMARY KEY,
userName VARCHAR(100),
userEmail VARCHAR(100),
userCity VARCHAR(100),
userState VARCHAR(20),
userZip VARCHAR(20),
userPhone VARCHAR(20),
userAddress VARCHAR(100),
cartID INT REFERENCES cart(cartID)
);

CREATE TABLE IF NOT EXISTS orders(
orderID serial PRIMARY KEY,
orderUserID INT REFERENCES users(userID),
orderAmount FLOAT,
orderShipAddress VARCHAR(100),
orderCity VARCHAR(100),
orderState VARCHAR(100),
orderZip VARCHAR(20),
orderPhone VARCHAR(20),
orderShippingCharges float,
orderTax FLOAT,
orderEmail VARCHAR(100),
orderDate TIMESTAMP,
orderShipped INT,
orderTrackingNumber VARCHAR(80)
);

CREATE TABLE IF NOT EXISTS productcategories(
categoryID serial UNIQUE,
categoryName VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS products(
productID serial PRIMARY KEY,
productName VARCHAR(100),
productPrice FLOAT,
productWeight FLOAT,
productCartDesc VARCHAR(250),
productShortDesc VARCHAR(1000),
productThumb VARCHAR(100),
productImage VARCHAR(100),
productCategory VARCHAR(20),
productUpdateDate TIMESTAMP,
productStock FLOAT
);


CREATE TABLE IF NOT EXISTS orderdetails(
detailID serial PRIMARY KEY,
detailOrderID INT REFERENCES orders(orderID),
detailProductID INT REFERENCES products(productID), 
detailName VARCHAR(250),
detailPrice FLOAT,
detailQuantity INT
);

CREATE TABLE IF NOT EXISTS optiongroups(
optionGroupID serial PRIMARY KEY UNIQUE,
optionGroupName VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS optiontable(
optionID INT UNIQUE,
optionName INT REFERENCES optiongroups(optionGroupID)
);


-- CREATE TABLE IF NOT EXISTS productoptions(
-- productOptionID INT,
-- optionID INT REFERENCES optiontable(optionID),
-- productID INT REFERENCES products(productID),
-- optionGroupID INT,
-- optionPriceIncrement FLOAT
-- );