# Setup

This SDK has been configured to require as little setup as possible. That being said, it still does require a little...

## Requirements

- PHP `>= 8.0`
- Laravel `>= 8.0` (required to use Laravel specific features)

## Installation

To install this package via [Composer](https://getcomposer.org):

```bash
$ composer require schierproducts/schier-product-api
```

```json
{
    "require": {
        "schierproducts/schier-product-api": "^1.0"
    }
}
```

> This package is still being actively developed on, so you may optionally choose to use the `:dev-master` so you can get the most up-to-date versions of this package
>
{style="note"}

## Using the client

To instantiate a new instance of the Schier Product API client, you will create a new instance of the `SchierProductApi` class.

**Be sure to pass the provided API key as an associative array:**

```php
use SchierProducts\SchierProductApi\ProductApiClient;

$products = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
```

### Other supported parameters

{type="full"}
api_base
: *string, default: https://api.schierproducts.com*
: If you are trying to connect to another environment other than the default production environment, define the base here. **FOR TESTING ONLY!!!**

api_version
: *string, default: 1*
: Schier will always use the most recent version of the API. However, if you are trying to connect to an older version, define it here.

### Laravel-specific support

If you are using this SDK with a Laravel-enabled environment, please [see this documentation](laravel.md) on how to use it's specific features.

### Property and method reference

[Click here to view examples on usage](php-sdk-reference.md)

<seealso>
    <!--Provide links to related how-to guides, overviews, and tutorials.-->
</seealso>