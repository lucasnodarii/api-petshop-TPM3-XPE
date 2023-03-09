import express from "express";
import cors from "cors";
import winston from "winston";
import propRouter from "./routes/prop.router.js";
import animalRouter from "./routes/animal.router.js";
import servicoRouter from "./routes/servico.router.js";
import blogRouter from "./routes/blog.router.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/proprietario", propRouter);
app.use("/animal", animalRouter);
app.use("/servico", servicoRouter);
app.use("/post", blogRouter);
app.use((error, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${error.message}`);
  res.status(400).send({ message: error.message });
});

app.listen(3000, () => console.log("App is running"));
