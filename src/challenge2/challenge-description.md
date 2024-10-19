# Challenge 2 - Use Your Environment

Generally speaking, the first idea you come up to solve a problem with isn't going to be the best one.

Of course, the first solution a dev thinks of to store a secret in their application is to write it into the source code and then private the repository.
Unfortunately, this doesn't always work.

- You forget to actually change the repository to private
- The source code gets leaked, and your secrets with it
- The secrets have to be changed, which requires a new commit and PR process

So, how do we get around hard coding our secrets? Environment variables.

Environment variables are simply values that get passed into your application from wherever they're executing. Instead of using a hard coded value for your JWT secret,
you can use `process.ENV.JWT_SECRET`, with `JWT_SECRET` being the name of the environment variable.

The best way of doing this is with `.env` files. See if you can't re-implement the functions from earlier using the `dotenv` library.

> [!TIP]
> Most languages have a cryptographically secure pseudorandom number generator (translation: secure RNG) module.
> For example, this one-liner can generate super long tokens with NodeJS:
> ```javascript
> require('crypto').randomBytes(256).toString('base64')
```

## Useful Links

- [dotenv](https://www.npmjs.com/package/dotenv)
- [Working with .env files in typescript](https://dev.to/asjadanis/parsing-env-with-typescript-3jjm)
- [Env File: The Only Guide You'll Need](https://onboardbase.com/blog/env-file-guide/)
