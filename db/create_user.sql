INSERT INTO users ( userName,userEmail ) VALUES ( $1, $2)
RETURNING *;