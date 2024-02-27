import express from "express";
import randomImage from "./background/random-image-express.mjs"

var app = express();

app.use("/background", randomImage);

export default app;