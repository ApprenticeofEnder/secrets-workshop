/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import express, { Express, Request, Response } from "express";

import * as challenge1 from "./challenge1/challenge";
import * as challenge2 from "./challenge2/challenge";
import * as challenge3 from "./challenge3/challenge";
import * as challenge4 from "./challenge4/challenge";

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
    const { username, password }: LoginPayload = req.body;
    const token = challenge1.login(username, password);
    if (token === null) {
      res.status(401);
      res.json(ApiErrors.LOGIN_FAILED);
    }
    res.json({
      status: "success",
      access_token: token,
    });
  } catch (e) {
    res.status(500);
    res.json({
      status: "error",
      message: `Error processing request: ${e}`,
    });
  }
});

app.post("/challenge-1/verify-token", (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const splitHeader = authorizationHeader?.split(" ");
    if (splitHeader == undefined) {
      throw ApiErrors.BAD_AUTHORIZATION_HEADER;
    }
    const tokenVerified = challenge1.verifyJwt(splitHeader[1]);
    if (!tokenVerified) {
      throw ApiErrors.BAD_JWT;
    }
    res.json({
      status: "success",
      access_token: "blah",
    });
  } catch (e) {
    if (e === ApiErrors.BAD_AUTHORIZATION_HEADER || e === ApiErrors.BAD_JWT) {
      res.status(400);
      res.json(e);
      return;
    }
    res.status(500);
    res.json({
      status: "error",
      message: `Error processing request: ${e}`,
    });
  }
});

app.post("/challenge-2/login", (req: Request, res: Response) => {
  try {
    const { username, password }: LoginPayload = req.body;
    const token = challenge2.login(username, password);
    if (token === null) {
      res.status(401);
      res.json(ApiErrors.LOGIN_FAILED);
    }
    res.json({
      status: "success",
      access_token: token,
    });
  } catch (e) {
    res.status(500);
    res.json({
      status: "error",
      message: `Error processing request: ${e}`,
    });
  }
});

app.post("/challenge-2/verify-token", (req: Request, res: Response) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const splitHeader = authorizationHeader?.split(" ");
    if (splitHeader == undefined) {
      throw ApiErrors.BAD_AUTHORIZATION_HEADER;
    }
    const tokenVerified = challenge2.verifyJwt(splitHeader[1]);
    if (!tokenVerified) {
      throw ApiErrors.BAD_JWT;
    }
    res.json({
      status: "success",
      access_token: "blah",
    });
  } catch (e) {
    if (e === ApiErrors.BAD_AUTHORIZATION_HEADER || e === ApiErrors.BAD_JWT) {
      res.status(400);
      res.json(e);
      return;
    }
    res.status(500);
    res.json({
      status: "error",
      message: `Error processing request: ${e}`,
    });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
