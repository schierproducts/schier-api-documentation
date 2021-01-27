---
prev: false
next: /basics/errors
---

# Basics

## Introduction

Schier's APIs are organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Each request allows for [url-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) parameters to be attached to each request to modify/filter the desired content. The Schier API ecosystem has been designed to use standard HTTP response codes, authentication and verbs.

## Authentication

Each "public" API uses API Keys to authenticate the user/client that is trying to access each applications' respective content. You can request an API key from Schier by phone ([913-951-3300](tel://9139513300)) or by email ([developers@schierproducts.com](mailto:developers@schierproducts.com)). Please note that we do not distribute keys to everyone who asks.

### Product and Territory specific details

If you are retrieving information from the Product/Territory API's, creating an API is self-serviced. When you are given access to the API dashboard ([api.schierproducts.com](https://api.schierproducts.com)), you can create your key from the profile dropdown in the upper-right corner of the screen:

<img :src="$withBase('/assets/img/screenshots/creating-api-key.png')" alt="Create an API Key">

Simply give the key a name and then click **create**. Once the key is created, you will be presented with a dialog with you API key within the dialog:

<img :src="$withBase('/assets/img/screenshots/copy-api-key.png')" alt="Copy a new API Key">

::: tip NOTE
Make sure that you copy this key and put it in a safe place as it will not be shown again.
:::

### Using the API Key

To use the provided API key, you will attach your key as a [Bearer Token header](https://www.loginradius.com/blog/async/everything-you-want-to-know-about-authorization-headers/) to your request as your proof of authentication.

So, for example, if you were using cURL to access the Grease Monkey API, your request would look something like this:

``` http
curl --request GET \
  --url https://app.greasemonkeysizing.com/api/users \
  --header 'Authorization: Bearer <YOUR API TOKEN>'
```

or via PHP:

```php
<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://app.greasemonkeysizing.com/api/users');
$request->setRequestMethod('GET');
$request->setHeaders([
  'Authorization' => 'Bearer <YOUR API TOKEN>'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```

::: tip NOTE
PHP-based API "wrapper" packages are currently in development for each of the API's. This will provide additional speed and convenience instead of creating a new request every time.
:::