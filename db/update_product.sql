UPDATE products
SET  productName = $2, 
productprice = $3,
productcartdesc = $4,
productshortdesc = $5,
productimage = $6,
productstock = $7,
productsize = $8,
productcategory = $9
WHERE productID = $1
returning *;