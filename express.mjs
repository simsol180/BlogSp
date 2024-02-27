// Server setup
import express from "express";
import cors from "cors";
import api from "./src/api-express.mjs";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
});

app.use("/api", api)

// Database connection
const db = 'your-mongodb-connection-string';
//mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));