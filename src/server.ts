import mongoose from "mongoose";
import app from "./App";
import config from "./config";

async function main() {
  await mongoose.connect(config.db_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();
