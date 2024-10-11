/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import jwt from "jsonwebtoken";
import { describe, expect, test } from "vitest";
import { verifyJWT } from "./challenge";

const USERNAME = "johndoe";
const PASSWORD = "johndoe";

describe("CHALLENGE 2", () => {
  test("JWT secret env var is defined", () => {
    expect(process.env.JWT_SECRET).not.toBe(null);
    expect(process.env.JWT_SECRET).not.toBe(undefined);
  });

  test("verifyJWT works properly", () => {
    const token = jwt.sign(
      {
        user: USERNAME,
      },
      process.env.JWT_SECRET || "",
    );
    expect(verifyJWT(token)).toBe(true);
    const bogusToken = jwt.sign(
      {
        user: USERNAME,
      },
      "secret",
    );
    expect(verifyJWT(bogusToken)).toBe(false);
  });
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
