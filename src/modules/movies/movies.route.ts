import express from "express";
import { movieController } from "./movies.controller";

const router = express.Router();

router.post("/", movieController.createMovie);
router.get("/", movieController.getAllMovies);
// router.get("/:movieId", movieController.getOneMovie);
router.get("/:slug", movieController.getOneMovieBySlug);

export const moviesRouter = router;
