import express from "express";

const app = express();

app.get("/","index.html");

export default app;