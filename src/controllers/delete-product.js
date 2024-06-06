import { DeleteProductUseCase } from "../use-cases/delete-product.js";
import { deleteItem } from "./helper.js";

export class DeleteProductController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.params;

            const deleteProductUseCase = new DeleteProductUseCase();

            const deleteProduct = await deleteProductUseCase.execute(params.id);

            return deleteItem(deleteProduct);
        } catch(error) {

            return {
                statusCode:500,
                body: {
                    message: 'Failed to delete product',
                }
            };
        }
    }
}