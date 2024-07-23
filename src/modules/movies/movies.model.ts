import { model, Schema } from "mongoose";
import { TMovies, TReview } from "./movies.interface";

const reviewSchema = new Schema<TReview>({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<TMovies>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  viewCount: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: {
    type: [reviewSchema],
    required: true,
  },
});

export const Movie = model<TMovies>("Movie", movieSchema);
