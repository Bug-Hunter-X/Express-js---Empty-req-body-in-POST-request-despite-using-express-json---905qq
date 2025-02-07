# Express.js - Empty req.body in POST Request

This repository demonstrates a common issue in Express.js applications where the request body (req.body) is empty despite using the `express.json()` middleware.  The bug is caused by incorrect or missing middleware configuration.

## Bug Report
The provided `bug.js` file contains the flawed code. When a POST request with JSON data is sent, `req.body` remains empty, leading to unexpected behavior.

## Solution
The `bugSolution.js` file presents a corrected version.  The solution ensures proper middleware placement and configuration to correctly parse the JSON data.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `node bug.js`.
5. Send a POST request to `http://localhost:3000/data` with JSON data in the body (e.g., using curl or Postman).
6. Observe that `req.body` in the server console is empty.
7. Repeat steps 4-6 using `bugSolution.js` and see that `req.body` is correctly populated.

## Additional Notes
This common error highlights the importance of correct middleware placement and usage in Express.js.  Ensure that `express.json()` is placed *before* any routes that expect JSON data.