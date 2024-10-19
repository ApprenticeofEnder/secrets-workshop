/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import express, { Express, Request, Response } from "express";

import * as challenge1 from "./challenge1/challenge";
import * as challenge2 from "./challenge2/challenge";
// import * as challenge3 from "./challenge3/challenge";
// import * as challenge4 from "./challenge4/challenge";

const app: Express = express();
export const port = process.env.PORT || 3000;

challenge2.init();

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    message: "Secrets Workshop Server (SWS)",
  });
});

app.post("/challenge-1/login", (req: Request, res: Response) => {
  try {
    type LoginPayload = { username: string; password: string }
    const { username, password } =
      req.body;
  } catch (e) {
    res.status(500);
    res.json({
      status: "error",
      message: `Error processing request: ${e}`,
    });
  }
});

app.post("/challenge-1/verify-token", (req: Request, res: Response) => {
  const authorizationHeader = req.headers.authorization;
  res.send("Secrets Workshop Server (SWS)\n");
});

app.post("/challenge-2/verify-token", (req: Request, res: Response) => {
  res.send("Secrets Workshop Server (SWS)\n");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
