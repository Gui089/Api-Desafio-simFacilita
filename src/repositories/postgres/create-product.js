import { PostgresHelper } from "../../db/postgres/helper";

export class PostgresCreateProduct {
    async execute(createProductParams) {
        await PostgresHelper.query(
            'INSERT INTO products(id, product_name, price, quantity, photo,description, status) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [
                createProductParams.id,
                createProductParams.product_name,
                createProductParams.price,
                createProductParams.quantity,
                createProductParams.photo,
                createProductParams.description,
                createProductParams.status
            ]
        );

        const createProduct = await PostgresHelper.query(
            'SELECT * FROM products WHERE id = $1',
            [createProductParams.id]
        );

        return createProduct[0];
    }
}