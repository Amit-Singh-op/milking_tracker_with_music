import { Application } from "express";
import morgan from "morgan";

const logger = (app: Application): void => {
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
};

export default logger;
