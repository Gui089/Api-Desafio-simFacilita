import { v4 as uuid } from 'uuid';
import { PostgresCreateProductRepository } from '../repositories/postgres/create-product.js';

export class CreateProductUseCase {
    async execute(createProductParams) {
        const product_id = uuid();

        const product = {
            ...createProductParams,
            id:product_id
        }

        const postgresCreateProductRepository = new PostgresCreateProductRepository();

        return await postgresCreateProductRepository.execute(product);
    }
}