INSERT INTO orders (orderuserID,orderAmount,orderShipAddress,orderCity,orderState,orderZip,orderPhone,orderShippingCharges,orderTax,orderEmail,orderDate )
VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
returning *;