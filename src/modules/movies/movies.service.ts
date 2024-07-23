// import { Types } from "mongoose";
import { TMovies } from "./movies.interface";
import { Movie } from "./movies.model";

const createMovies = async (payLoad: TMovies) => {
  const result = await Movie.create(payLoad);
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const getOneMovie = async (_id: string) => {
  const result = await Movie.findById(_id);
  return result;
};

export const movieService = {
  createMovies,
  getAllMovies,
  getOneMovie,
};
