SELECT p.productName, p.productPrice, p.productCartDesc, p.productShortDesc, p.productImage, p.productStock, p.productCategory, c.necklace16, c.necklace18, c.necklace20, c.necklace22, c.necklace24 
FROM products p 
JOIN categorynecklacesizes c
ON p.productID = c.productID;