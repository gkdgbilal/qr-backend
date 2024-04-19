import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const localPort = 8800;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("Postgre ve nodejs ile vercel denemesi");
});

app.listen(localPort, () => {
  console.log(`Sunucu ${localPort} portunda çalışıyor.`);
});
