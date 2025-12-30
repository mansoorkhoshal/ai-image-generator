import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongoDB/connect.js";
import postRoutes from "./routes/postRoutes.js";
import stacksonRoutes from "./routes/stacksonRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/stackson", stacksonRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from STACKSON.AI!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () =>
      console.log("Server is started on port http://localhost:3000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
