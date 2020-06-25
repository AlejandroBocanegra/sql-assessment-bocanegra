CREATE TABLE list(
  id serial,
  item varchar,
  qty integer,
  units varchar
);

INSERT INTO list (item, qty, units) VALUES ('milk', 2, 'gallons');
INSERT INTO list (item, qty, units) VALUES ('eggs', 1, 'dozen');
INSERT INTO list (item, qty, units) VALUES ('butter', 12, 'sticks');
INSERT INTO list (item, qty, units) VALUES ('flour', 1, 'pound');
INSERT INTO list (item, qty, units) VALUES ('sour yuck', 1, 'dollop');
INSERT INTO list (item, qty, units) VALUES ('apples', 2, 'bushels');
INSERT INTO list (item, qty, units) VALUES ('sugar', 2, 'pounds');
INSERT INTO list (item, qty, units) VALUES ('oj', 3, 'gallons');

SELECT id, item, qty, units FROM list WHERE units LIKE'gal%';

SELECT COUNT (*) FROM list;

DELETE FROM list WHERE units = 'dollop' OR units = 'sticks';

SELECT * FROM list;