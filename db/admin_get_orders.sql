SELECT lineItem.orderID,lineItem.productID,lineItem.quantity,products.productName,products.productPrice,products.productImage,users.userName,orders.orderID,orders.orderAmount, orders.orderDate 
FROM orders
JOIN users
ON orders.orderuserid = users.userid
LEFT JOIN lineItem 
ON lineItem.orderID=orders.orderID
JOIN products
ON lineItem.productID = products.productID