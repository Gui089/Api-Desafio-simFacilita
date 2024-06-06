import { CreateProductUseCase } from "../use-cases/create-product.js";
import { created } from "./helper.js";

export class CreateProductController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body;

            const requiredFields = ['product_name', 'price', 'quantity', 'photo', 'description', 'status'];

            for (const field of requiredFields) {
                if (!params[field] || params[field].toString().trim().length === 0) {
                    return {
                        statusCode: 400,
                        body: {
                            message: `Missing params ${field}`
                        }
                    };
                }
            }

            if (params.price <= 0) {
                return {
                    statusCode: 400,
                    body: {
                        message: 'Price must be greater than 0'
                    }
                };
            }

            if (params.quantity <= 0) {
                return {
                    statusCode: 400,
                    body: {
                        message: 'Quantity must be greater than 0'
                    }
                };
            }

            const createProductUseCase = new CreateProductUseCase();
            const createProduct = await createProductUseCase.execute(params);

            return created(createProduct);
            
        } catch (error) {
            console.error('Error creating product:', error);
            return {
                statusCode: 500,
                body: {
                    message: 'Error creating product'
                }
            };
        }
    }
}
