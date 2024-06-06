import { PostgresHelper } from "../../db/postgres/helper.js";

export class DeleteProductRepository{
    async execute(deleteProductParams) {
        await PostgresHelper.query(
            'DELETE FROM products WHERE id = $1',
            [
                deleteProductParams.id,
            ]
        );

        const remainingProducts = await PostgresHelper.query('SELECT * FROM products');

        return remainingProducts.rows;
    }
}