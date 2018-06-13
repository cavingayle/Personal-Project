DELETE FROM products
WHERE productID = $1
returning *;