CREATE TABLE dim_date (
    date_id SERIAL PRIMARY KEY,
    full_date DATE NOT NULL,
    day INT,
    month INT,
    year INT,
    month_name VARCHAR(20),
    quarter INT
);

-- Sample INSERTs with cleaned date formats (yyyy-mm-dd)
INSERT INTO dim_date (full_date, day, month, year, month_name, quarter)
VALUES 
('2023-01-02', 2, 1, 2023, 'January', 1),
('2023-01-06', 6, 1, 2023, 'January', 1),
('2023-01-12', 12, 1, 2023, 'January', 1),
('2023-01-14', 14, 1, 2023, 'January', 1),
('2023-01-15', 15, 1, 2023, 'January', 1),
('2023-01-20', 20, 1, 2023, 'January', 1),
('2023-01-21', 21, 1, 2023, 'January', 1),
('2023-01-22', 22, 1, 2023, 'January', 1),
('2023-01-24', 24, 1, 2023, 'January', 1),
('2023-01-26', 26, 1, 2023, 'January', 1);

CREATE TABLE dim_store (
    store_id SERIAL PRIMARY KEY,
    store_name VARCHAR(50) NOT NULL,
    store_city VARCHAR(50) NOT NULL
);

-- Cleaned city names and removed NULLs
INSERT INTO dim_store (store_name, store_city)
VALUES 
('Chennai Anna', 'Chennai'),
('Delhi South', 'Delhi'),
('Bangalore MG', 'Bangalore'),
('Pune FC Road', 'Pune'),
('Mumbai Central', 'Mumbai');

CREATE TABLE dim_product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Standardized category capitalization
INSERT INTO dim_product (product_name, category)
VALUES 
('Speaker', 'Electronics'),
('Tablet', 'Electronics'),
('Phone', 'Electronics'),
('Smartwatch', 'Electronics'),
('Laptop', 'Electronics'),
('Jeans', 'Clothing'),
('Jacket', 'Clothing'),
('T-Shirt', 'Clothing'),
('Saree', 'Clothing'),
('Atta 10kg', 'Grocery');


CREATE TABLE fact_sales (
    fact_id SERIAL PRIMARY KEY,
    date_id INT REFERENCES dim_date(date_id),
    store_id INT REFERENCES dim_store(store_id),
    product_id INT REFERENCES dim_product(product_id),
    units_sold INT,
    unit_price DECIMAL(10,2),
    total_sales DECIMAL(12,2)
);

-- Sample INSERTs (first 10 cleaned rows)
INSERT INTO fact_sales (date_id, store_id, product_id, units_sold, unit_price, total_sales)
VALUES
(1, 1, 1, 3, 49262.78, 147788.34),
(2, 1, 2, 11, 23226.12, 255487.32),
(3, 1, 3, 20, 48703.39, 974067.80),
(4, 2, 2, 14, 23226.12, 325165.68),
(5, 1, 4, 10, 58851.01, 588510.10),
(6, 3, 10, 12, 52464.00, 629568.00),
(7, 4, 4, 6, 58851.01, 353106.06),
(8, 4, 6, 16, 2317.47, 37079.52),
(9, 3, 9, 9, 52464.00, 472176.00),
(10, 1, 7, 15, 30187.24, 452808.60);
