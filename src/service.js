import express from "express";
import { router } from "./routes/index";

const app = express();

app.use(router);

app.listen(3000, (err, data) => {
  console.log("Server is running!")
});
