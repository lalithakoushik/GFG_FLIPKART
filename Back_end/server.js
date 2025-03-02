import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/emailRouter.js";
import itemRouter from "./routes/itemRouter.js";
import cartRouter from "./routes/cartRouter.js";
import loginrouter from "./routes/loginRouter.js";
import passwordRouter from "./routes/passwordRouter.js";
import addressRouter from "./routes/addressRouter.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const url = process.env.MONGO_URL;

if (!url) {
  console.error("MONGO_URL is missing in .env file!");
  process.exit(1);
}

console.log("MongoDB URL:", url);

// Connect to MongoDB
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// Routes
app.use("/api/email", router);
app.use("/api/items", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", loginrouter);
app.use("/api/password", passwordRouter);
app.use("/api/address", addressRouter);
app.use(itemRouter);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
