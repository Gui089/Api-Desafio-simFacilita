import express from 'express';
import { CreateProductController } from './src/controllers/create-product.js';
import { DeleteProductController } from './src/controllers/delete-product.js';
import { PostgresHelper } from './src/db/postgres/helper.js';
import cors from 'cors';



const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node successfully loaded");
});

app.post("/product", async (req, res) => {
    const createProductController = new CreateProductController();

    try {
        const createProductResponse = await createProductController.execute(req);

        const statusCode = createProductResponse.statusCode || 200;
        const responseBody = createProductResponse.body || {};

        res.status(statusCode).json(responseBody);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete("/product/:id", async (req, res) => {

    const deleteProductController = new DeleteProductController();

    try {
        const response = await deleteProductController.execute(req);

        res.status(response.statusCode).json(response.body);

    } catch(error ){
        res.status(500).json({error: 'Internal server error'});
    }
});

app.get("/product", async (req, res) => {
    const product = await PostgresHelper.query('SELECT * FROM products');

    res.status(200).json(product);
});

app.get("/product/:product_name", async (req,res) => {
    const product = await PostgresHelper.query('SELECT * FROM products WHERE product_name = $1', [
        req.params.product_name
    ]);

    res.status(200).json(product);
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

