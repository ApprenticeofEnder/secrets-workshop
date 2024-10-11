/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Secrets Workshop Server (SWS)\n");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
