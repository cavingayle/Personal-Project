update products
set  productprice =$2, productname =$3,productstock = $4
where productID = $1
returning *;