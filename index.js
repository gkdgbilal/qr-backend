import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import menuRouter from "./routes/menu/menu.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Postgre ve nodejs ile vercel denemesi");
});

app.use("/", menuRouter);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
