/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import axios, { AxiosResponse } from "axios";
import jwt from "jsonwebtoken";
import { describe, expect, test } from "vitest";
import { faker } from "@faker-js/faker";

import { login, verifyJwt, correctUsernameAndPassword } from "./challenge";

const USERNAME = "johndoe";
const PASSWORD = "johndoe";

describe("CHALLENGE 1", () => {
  test("login produces a JWT", async () => {
    const token = login(USERNAME, PASSWORD);
    expect(token).not.toBeNull();
    const decodedToken = jwt.decode(token!);
    expect(decodedToken).toBe({
      user: USERNAME,
    });
    const apiRes: AxiosResponse = await axios.post(
      "http://localhost:3000/challenge-1/login",
      {
        username: USERNAME,
        password: PASSWORD,
      },
      { headers: { "Content-Type": "application/json" } },
    );
    expect(apiRes.data).toHaveProperty("status", "success");
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

  test("verifyJwt works properly", () => {
    const token = login(USERNAME, PASSWORD);
    expect(verifyJwt(token!)).toBe(true);
    const bogusToken = jwt.sign(
      {
        user: USERNAME,
      },
      "notasecret",
    );
    expect(verifyJwt(bogusToken)).toBe(false);
  });
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
