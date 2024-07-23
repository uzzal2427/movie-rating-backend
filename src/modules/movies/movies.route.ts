import express from "express";
import { movieController } from "./movies.controller";

const router = express.Router();

router.post("/", movieController.createMovie);
router.get("/", movieController.getAllMovies);
router.get("/:movieId", movieController.getOneMovie);

export const moviesRouter = router;
