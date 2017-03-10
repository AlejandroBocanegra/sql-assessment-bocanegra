-- LIST SCHEMA

-- id         | an auto-incrementing integer
-- item       | a string of varying length up to 255 characters
-- qty        | an integer
-- units      | a string of varying length up to 50 characters

CREATE TABLE list (
  id serial,
  item varchar(255),
  qty integer,
  units varchar(50)
);
