# Getting Started

Schier's APIs are organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Each request allows for [url-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) parameters to be attached to each request to modify/filter the desired content. The Schier API ecosystem has been designed to use standard HTTP response codes, authentication and verbs.

## Authentication

Each "public" API uses API Keys to authenticate the user/client that is trying to access each applications' respective content. You can request an API key from Schier by phone ([913-951-3300](tel://9139513300)) or by email ([developers@schierproducts.com](mailto:developers@schierproducts.com)). Please note that we do not distribute keys to everyone who asks.

### Using the API Key

To use the provided API key, you will attach your key as a [Bearer Token header](https://www.loginradius.com/blog/async/everything-you-want-to-know-about-authorization-headers/) to your request as your proof of authentication.

So, for example, if you were using cURL to access the Grease Monkey API, your request would look something like this:

<tabs group="stack">
<tab title="cUrl" group-key="curl">

```cURL
curl --request GET \
  --url https://api.schierproducts.com/api/product \
  --header 'Authorization: Bearer <YOUR API TOKEN>'
```
</tab>
<tab title="PHP" group-key="php">

```php
<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://api.schierproducts.com/api/product');
$request->setRequestMethod('GET');
$request->setHeaders([
  'Authorization' => 'Bearer <YOUR API TOKEN>'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```
</tab>
</tabs>