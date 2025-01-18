# Silent Crash in Express.js Request Handler

This repository demonstrates a common, yet subtle, error in Express.js applications: silent crashes due to unhandled exceptions within request handlers.  If an error occurs within a route handler and isn't properly caught, the server might terminate without providing helpful error messages in the console, making debugging difficult.

## The Problem

The `bug.js` file contains an Express.js server with a route handler that lacks proper error handling. If an exception occurs within this handler, the server will silently crash.

## The Solution

The `bugSolution.js` file shows the corrected version.  It uses a `try...catch` block to gracefully handle exceptions, logging errors to the console and sending an appropriate response to the client.

This prevents the server from crashing and helps in identifying and resolving issues effectively.