import express from 'express';
import { CreateProductController } from './src/controllers/create-product.js';

const PORT = process.env.PORT || 3002;

const app = express();

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

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

