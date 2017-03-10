-- Remove butter and sour cream from your list and return the rows that are deleted.

DELETE FROM list WHERE item='butter' OR item='sour cream' RETURNING *;
