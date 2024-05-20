import express from "express";
import morgan from "morgan";
import "express-async-errors";
import { getAll, getOneById, create, updateById, deliteById } from "./controllers/planets.js"

const app = express();
const port = 3000;


app.use(morgan("dev"));
app.use(express.json());


app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deliteById);

app.listen(port, () => {
  console.log(
    `Example app listening on port http://localhost:${port}/api/planets`
  );
});