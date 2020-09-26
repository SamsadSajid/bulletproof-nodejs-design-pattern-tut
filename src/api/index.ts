import { Router } from "express";
import demo from "./demo";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  demo(app);

  return app;
};
