import express from 'express';

const PORT = 3000;

const app = express();

app.get("/", function (req, res) {
    res.send("Node running");
});
app.listen(PORT, function () {
    console.log('server listening on port :', PORT);
});
