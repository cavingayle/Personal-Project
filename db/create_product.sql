INSERT INTO products( productname,productprice, productcartdesc, productshortdesc, productimage, productstock, productsize, productcategory )
VALUES($1, $2, $3, $4, $5, $6, $7, $8) 
RETURNING *;