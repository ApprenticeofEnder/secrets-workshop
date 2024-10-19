# secrets-workshop

## Installation

This project requires NodeJS v20 or later and NPM.

```bash
git clone https://github.com/ApprenticeofEnder/secrets-workshop
cd secrets-workshop
npm install
```

## The Challenges

This workshop is based on a series of challenges. To progress through, solve them (preferably) in order.
The challenges are based on `vitest` test suites -- surprise, you're getting experience with unit testing, too!

**Note:** While the test suites are easily visible, **_please do not modify them!_**
That's the point of tests: they're consistent and thoroughly test the functionality you've implemented.

(They're also faster than, you know, manually testing everything, but that's neither here nor there.)

To run the challenges:

```bash
npm run challenge1 # Challenge 1
npm run challenge2 # Challenge 2
npm run challenge3 # Challenge 3
                   # No tests for challenge 4 . . . you'll see why!
npm run test:server     # to make sure the server is running as expected
npm test       # to test *everything*, including the challenges
```

There's no real incentive for completing these challenge quickly or slowly.
They're designed to get you familiar with working with secrets, so that'll be useful to put on a resume!

## REST API

If you'd like, the REST API for this workshop can be used by running:
```bash
npm run dev
```
and navigating to `http://localhost:3000` in your browser.
