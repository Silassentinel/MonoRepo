User requests a bearer token at the OAuth server, by providing the correct headers with the correct values.
The server checks the details and returns the bearer token if the data is validated.

The user uses the correct header with the received token and given api key to communicate with the services.

The services FIRST check the token with the OAuth server, and if the token is valid, the service will respond with the requested data.
Else nothing will be returned.

To register the register endpoint must be used, and the user must provide the correct headers with the correct values.
After manual confirmation the api key will be generated and returned to the user via email.