import { Request, Response } from "express";
import { movieService } from "./movies.service";
// import { Types } from "mongoose";

const createMovie = async (req: Request, res: Response) => {
  const moviesData = req.body;
  const result = await movieService.createMovies(moviesData);
  res.json({
    success: true,
    message: "Movie created successfully!",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await movieService.getAllMovies();
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Movies fetched unsuccessfully!",
      error: err,
    });
  }
};

const getOneMovie = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await movieService.getOneMovie(movieId);
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Movies fetched unsuccessfully!",
      error: err,
    });
  }
};
const getOneMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await movieService.getOneMovieBySlug(slug);
    res.status(200).json({
      success: true,
      message: "Movies fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Movies fetched unsuccessfully!",
      error: err,
    });
  }
};

export const movieController = {
  createMovie,
  getAllMovies,
  getOneMovie,
  getOneMovieBySlug,
};
