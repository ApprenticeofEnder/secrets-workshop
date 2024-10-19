/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import jwt from "jsonwebtoken";
import { describe, expect, test } from "vitest";
import { faker } from "@faker-js/faker";

import { login, verifyJwt, correctUsernameAndPassword } from "./challenge";

const USERNAME = "johndoe";
const PASSWORD = "johndoe";

describe("CHALLENGE 2", () => {
  test("JWT secret env var is defined", () => {
    expect(process.env.JWT_SECRET).not.toBe(null);
    expect(process.env.JWT_SECRET).not.toBe(undefined);
  });

  test("verifyJwt works properly", () => {
    const token = jwt.sign(
      {
        user: USERNAME,
      },
      process.env.JWT_SECRET || "",
    );
    expect(verifyJwt(token)).toBe(true);
    const bogusToken = jwt.sign(
      {
        user: USERNAME,
      },
      "secret",
    );
    expect(verifyJwt(bogusToken)).toBe(false);
  });

  test("correctUsernameAndPassword is unchanged", () => {
    expect(correctUsernameAndPassword(USERNAME, PASSWORD)).toBe(true);
    expect(correctUsernameAndPassword("admin", "admin")).toBe(false);
    for (let i = 0; i < 10; i++) {
      const randomUsername = faker.internet.userName();
      const randomPassword = faker.internet.password();
      expect(correctUsernameAndPassword(randomUsername, randomPassword)).toBe(
        false,
      );
    }
  });
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
