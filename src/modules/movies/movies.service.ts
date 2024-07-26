// import { Types } from "mongoose";
import { TMovies } from "./movies.interface";
import { Movie } from "./movies.model";
import slugify from "slugify";

const createMovies = async (payLoad: TMovies) => {
  // create slug to fine specific movie in a secure way with slugify .

  const slug = slugify(`${payLoad.title}-${payLoad.genre}`, { lower: true });
  console.log(slug, "new slug");
  const result = await Movie.create({ ...payLoad, slug });
  // console.log(result);
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
const getOneMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const movieService = {
  createMovies,
  getAllMovies,
  getOneMovie,
  getOneMovieBySlug,
};
