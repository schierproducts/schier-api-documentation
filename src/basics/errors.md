---
title: Handling Errors
next: /basics/pagination
---

# Errors

Schier's APIs use [standard HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) to indicate the status (success or failure) of each request made the respective API endpoint:

* Codes in the `2XX` range indicate success
* Codes in the `4XX` range indicate an error with the request; usually has to do with the information provided (validation) or the request was made to an incorrect endpoint
* Codes in the `5XX` range refer to an internal service error

::: danger 500 Responses
If you receive a `5XX` status code, please contact Schier and notify us of the problem and steps to replicate it.
:::

## Response Code Explanation

| Code           | Summary                      |
| -------------- | ---------------------------- |
| 200            | **OK** &mdash; The request was successful and everything is ok |
| 400, 422            | **Bad Request** &mdash; The request was invalid due to incorrect/missing parameters |
| 401            | **Unauthorized** &mdash; No valid API key was provided |
| 403            | **Forbidden** &mdash; The provided API does not have the necessary permissions to successfully perform the request |
| 404            | **Not Found** &mdash; The requested endpoint/resource does not exist |
| 429            | **Too Many Requests** &mdash; You have made too many requests, and the API has put a rate limiter in place to prevent potential abuse |
| 500, 502, 503, 504 | **Server Errors** &mdash; The API server is currently experiencing issues. The request was rejected. |
