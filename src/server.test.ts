import axios, { AxiosResponse } from "axios";
import { expect, test } from "vitest";

import { port } from "./server";

test("Server welcome message works as expected", async () => {
  const res: AxiosResponse = await axios.get(`http://localhost:${port}`);
  expect(res.data).toEqual({
    status: "success",
    message: "Secrets Workshop Server (SWS)",
  });
});
