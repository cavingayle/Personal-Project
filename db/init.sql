DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS orderdetails;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS productoptions;
DROP TABLE IF EXISTS productcategories;
DROP TABLE IF EXISTS optiontable;
DROP TABLE IF EXISTS optiongroups;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS categorynecklacesizes;

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

CREATE TABLE IF NOT EXISTS lineitem(
lineID SERIAL,
orderID INT REFERENCES orders(orderID),
productID INT REFERENCES products(productID),
quantity INT

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
-- productThumb VARCHAR(100),
productImage VARCHAR(100),
productCategory VARCHAR(20),
productUpdateDate TIMESTAMP,
productStock FLOAT,
productColor VARCHAR(20),
productSize VARCHAR(20),
productAvailableSizes VARCHAR(50),
productSizeID INT,
productDiscount DECIMAL,
productDiscountAvailable BOOLEAN,
productFeatured BOOLEAN,
productAvailable BOOLEAN
);

CREATE TABLE IF NOT EXISTS categorynecklacesizes(
necklacesizeid SERIAL PRIMARY KEY,
productID INT UNIQUE REFERENCES products(productID),
necklace16 BOOLEAN,
necklace18 BOOLEAN,
necklace20 BOOLEAN,
necklace22 BOOLEAN,
necklace24 BOOLEAN,
keychain BOOLEAN
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

insert into products(productName, productPrice, productCartDesc, productShortDesc, productImage, productStock, productCategory)VALUES
('DMB inspired ONE SWEET World - Necklace, Tree Necklace, keychain option','15','Necklace, Tree Necklace, keychain option','This 1 inch disc is hand stamped with the famous Dave Matthews Band song title ONE SWEET WORLD, and is adorned with a silver tree charm with a chain type, length, or keychain options available when adding to cart. ','https://img.etsystatic.com/il/88ebcf/1236333125/il_570xN.1236333125_cgmn.jpg','1', 'Quotes/Lyrics')
('GRADUATION GIFT - Oh the Places Youll Go, Compass Jewelry, Dr. Seuss quote, hand stamped', '15', 'jdlajdlfj', 'This fun 1 inch pendant is stamped with the famous line "Oh the Places Youll Go" written by Dr. Seuss. Adorned with a compass charm. Your choice in ball chain, stainless steel cable chain (pictures) or Keychain.', 'https://img.etsystatic.com/il/4f2c27/1509887972/il_570xN.1509887972_aw8y.jpg', '10', 'Quotes/Lyrics');

INSERT INTO categorynecklacesizes (productID,necklace16,necklace18,necklace20,necklace22,necklace24)VALUES(1,true,true,true,true,false);
-- SELECT * FROM products;
SELECT p.productName, p.productPrice, p.productCartDesc, p.productShortDesc, p.productImage, p.productStock, p.productCategory, c.necklace16, c.necklace18, c.necklace20, c.necklace22, c.necklace24 
FROM products p 
JOIN categorynecklacesizes c
ON p.productID = c.productID;


