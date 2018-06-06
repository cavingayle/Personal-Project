update products
set productstock = 0
where productID = $1
returning *;