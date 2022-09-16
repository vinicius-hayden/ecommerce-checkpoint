INSERT INTO product(title, description, image, price) VALUES ('Product 1', 'This is a description test for product 1', 'image', 20);
INSERT INTO product(title, description, image, price) VALUES ('Product 2', 'This is a description test for product 2', 'image', 15);
INSERT INTO product(title, description, image, price) VALUES ('Product 3', 'This is a description test for product 3', 'image', 10);
INSERT INTO product(title, description, image, price) VALUES ('Product 4', 'This is a description test for product 4', 'image', 5);
INSERT INTO product(title, description, image, price) VALUES ('Product 5', 'This is a description test for product 5', 'image', 10);

INSERT INTO category(name) VALUES ('Category 1');
INSERT INTO category(name) VALUES ('Category 2');
INSERT INTO category(name) VALUES ('Category 3');
INSERT INTO category(name) VALUES ('Category 4');
INSERT INTO category(name) VALUES ('Category 5');

INSERT INTO product_category (product_id, category_id) VALUES (1,1);
INSERT INTO product_category (product_id, category_id) VALUES (2,2);
INSERT INTO product_category (product_id, category_id) VALUES (3,3);
INSERT INTO product_category (product_id, category_id) VALUES (4,4);
INSERT INTO product_category (product_id, category_id) VALUES (5,5);