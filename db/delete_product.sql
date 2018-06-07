UPDATE products
SET productstock = 0
WHERE productID = $1
returning *;