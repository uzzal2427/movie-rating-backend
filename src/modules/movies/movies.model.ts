import { model, Schema } from "mongoose";
import { TMovies, TMoviesModel, TReview } from "./movies.interface";
// import slugify from "slugify";
import bcrypt from "bcrypt";
import config from "../../config";
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
  password: {
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
  slug: {
    type: String,
    required: true,
  },
});

// movieSchema.pre("save", async function (next) {
//   this.slug = slugify(`${this.title}-${this.genre}`, { lower: true });

//   next;
// });

// store password into DB using Bcrypt . and using mongoose middleware .

movieSchema.pre("save", async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
});

export const Movie = model<TMovies, TMoviesModel>("Movie", movieSchema);
