/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */

import { simpleGit } from "simple-git";
import { describe, expect, test } from "vitest";

describe("CHALLENGE 3", () => {
  test(".env file is ignored", async () => {
    const git = simpleGit();
    const envIgnored = await git.checkIgnore(".env");
    const envLogs = await git.log({ file: ".env" });
    expect(envLogs).toEqual({
      all: [],
      latest: null,
      total: 0,
    });
    expect(envIgnored.includes(".env")).toEqual(true);
  });
});

/*
 * CAUTION: DO NOT MODIFY THIS FILE!!!
 */
