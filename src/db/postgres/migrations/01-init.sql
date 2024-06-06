CREATE TABLE IF NOT EXISTS products (
    ID UUID PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    quantity INT NOT NULL,
    photo BYTEA NOT NULL,
    description VARCHAR(250),
    status VARCHAR(50) NOT NULL
);

