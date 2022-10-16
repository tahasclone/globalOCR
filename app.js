import bodyParser from "body-parser";
import express from "express";
import routes from './src/routes/ocrRoutes.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json({limit: '200mb'}))

routes(app);

app.get('/', (req,res) => 
    res.send(`Node and express server running on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
)
