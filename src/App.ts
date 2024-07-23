import express, { Request, Response } from "express";
import { moviesRouter } from "./modules/movies/movies.route";
const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
