import { Router, Request, Response } from "express";
// import Logger from "../loaders/logger";
import { Container } from "typedi";
import { Logger } from "winston";

const route = Router();
// omit it
export default (app: Router) => {
  app.use("/demo", route);

  route.post("/me", (req: Request, res: Response) => {
    const logger: Logger = Container.get("logger");
    logger.info("kl");
    return res
      .json({
        yo: "bro"
      })
      .status(200);
  });
};
