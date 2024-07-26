import { Model } from "mongoose";

export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovies = {
  title: string;
  password: string;
  description: string;
  releaseDate: Date;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: [TReview];
  slug?: string;
};

export type TMoviesMethod = {
  createSlug: void;
};

export type TMoviesModel = Model<
  TMovies,
  Record<string, unknown>,
  TMoviesMethod
>;
