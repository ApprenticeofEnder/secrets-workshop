# Challenge 1

Welcome to the secrets workshop!

Your first objective: Implement a JWT authentication system.

Okay, that _sounds_ scary, but I've simplified it for you.
You just need to make sure 2 functions work:

- `login()`, which takes in a username and password and returns a JWT if the login succeeded,
  and `null` otherwise
- `verifyJwt()`, which takes in a JWT and returns true if the JWT is valid,
  and false otherwise

There's also a third function, `correctUsernameAndPassword`. This is a helper
function designed to simulate actually checking that both the username and
password are correct. I wouldn't recommend modifying it.

Now, how do you actually use a JWT? Time to get reading.

## Useful Links

- [JWT Introduction](https://jwt.io/introduction/)
- [Beginner's Guide to JWTs](https://developer.okta.com/blog/2020/12/21/beginners-guide-to-jwt)
- [jsonwebtoken Documentation](https://www.npmjs.com/package/jsonwebtoken)
