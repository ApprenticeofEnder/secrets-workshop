/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import jwt from "jsonwebtoken";
import { describe, expect, test } from "vitest";
import { faker } from "@faker-js/faker";

import { login, verifyJWT, correctUsernameAndPassword } from "./challenge";

const USERNAME = "johndoe";
const PASSWORD = "johndoe";

describe("CHALLENGE 1", () => {
  test("login produces a JWT", () => {
    const token = login(USERNAME, PASSWORD);
    const decodedToken = jwt.decode(token);
    expect(decodedToken).toBe({
      user: USERNAME,
    });
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

  test("verifyJWT works properly", () => {
    const token = login(USERNAME, PASSWORD);
    expect(verifyJWT(token)).toBe(true);
    const bogusToken = jwt.sign(
      {
        user: USERNAME,
      },
      "notasecret",
    );
    expect(verifyJWT(bogusToken)).toBe(false);
  });
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
