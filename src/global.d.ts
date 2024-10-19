export {};

namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    JWT_SECRET: string;
  }
}

declare global {
  enum ApiErrors {
    LOGIN_FAILED = {
      status: "failed",
      message:
        "Login failed, please try another username or password combination",
    },
    BAD_AUTHORIZATION_HEADER = {
      status: "error",
      message: "Invalid Authorization header.",
    },
    BAD_JWT = {
      status: "error",
      message: "Invalid access token.",
    },
  }

  interface LoginPayload {
    username: string;
    password: string;
  }
}
