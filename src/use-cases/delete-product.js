import { DeleteProductRepository } from "../repositories/postgres/delete-product.js";


export class DeleteProductUseCase {
    async execute(deleteProductParams) {
        const productId = deleteProductParams;

        const deleProductRepository = new DeleteProductRepository();

        return await deleProductRepository.execute(productId);
    }
}