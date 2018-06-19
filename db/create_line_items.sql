INSERT INTO lineitem(orderID,productID,quantity)
VALUES ($1,$2,$3)
returning *;