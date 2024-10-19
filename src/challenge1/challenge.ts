import jwt from "jsonwebtoken";

const SECRET = "secrettoken";

export function login(username: string, password: string): string | null {
  // TODO: Implement me!
  return "";
}

export function verifyJwt(token: string): boolean {
  // TODO: Implement me!
  return false;
}

export function correctUsernameAndPassword(
  username: string,
  password: string,
): boolean {
  const correctUsername: boolean = username == "johndoe";
  const correctPassword: boolean = password == "johndoe";
  return correctUsername && correctPassword;
}
