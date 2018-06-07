UPDATE products
SET  productprice =$2, productname =$3,productstock = $4
WHERE productID = $1
returning *;