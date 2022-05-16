import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import colors from "colors";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

// routes
app.use("/api/products", productRoutes);

// error middleware

app.use(notFound);
app.use(errorHandler);

// define PORT
const PORT = process.env.PORT || 5000;

// listen on port ...
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
