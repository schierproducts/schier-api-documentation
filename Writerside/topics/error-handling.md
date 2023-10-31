# Error Handling

While using this package, based on the server response, it is possible for your application to retrieve any of the following exceptions:

{type="full"}
Exception\InvalidRequestException
: The route/resource is not found

Exception\InvalidArgumentException
: The provided parameters for the requested resource are incorrectly formatted or are not supported.

Exception\AuthenticationException
: The API key is empty or is not correct.

Exception\PermissionException
: The API key is valid, but does not have permission to access the requested content.

Exception\RateLimitException
: Your use of the API has exceeded the defined the limit. Please wait before requesting additional content.

Exception\ApiConnectionException
: If the API service that provides the API cannot be reached.

Exception\UnknownApiErrorException
: A general, catch-all error for any other issues.