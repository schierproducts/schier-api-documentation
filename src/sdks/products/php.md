---
description: Software development kit documentation for the Schier Product API written in the PHP language with optional Laravel support.
prev: /sdks/products/
next: false
---

# Product API PHP Software Development Kit

This article provides software development kit documentation for the Schier Product API written in the PHP language with optional Laravel support.

**Table of Contents** 

[[toc]]

## Requirements

* PHP `>= 7.4`
* Laravel `>= 7.*` (required to use Laravel specific features)

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

::: tip Note
This package is still being actively developed on, so you may optionally choose to use the `:dev-master` so you can get the most up-to-date versions of this package
:::

### Using the client

To instantiate a new instance of the Schier Product API client, you will create a new instance of the `SchierProductApi` class. 

**Be sure to pass the provided API key as an associative array:**

```php
use SchierProducts\SchierProductApi\ProductApiClient;

$products = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
```

#### Other supported parameters

`api_base` *string, default: https://api.schierproducts.com*

If you are trying to connect to another environment other than the default production environment, define the base here. FOR TESTING ONLY!!!

`api_version` *string, default: 1*

Schier will always use the most recent version of the API. However if you are trying to connect to an older version, define it here.

### Laravel support

#### Configuration

To set the API key that this package uses to authenticate your requests, add the following entry to your app's environment files:

```dotenv
SCHIER_PRODUCT_API_KEY=<YOUR API KEY>
```

[Also see Basics - Authentication](/basics/#authentication)

##### Other Variables

```dotenv
SCHIER_PRODUCT_API_BASE
```

If you are trying to connect to another environment other than the default production environment, define the base here. FOR TESTING ONLY!!!

```dotenv
SCHIER_PRODUCT_API_VERSION
```

Schier will always use the most recent version of the API. However if you are trying to connect to an older version, define it here.

#### Package auto-discovery

Since this package has a minimum Laravel dependency version of `7.*`, if you are using this package in a Laravel application, you should not have to register this package's service provider.

If you are for some reason *not using auto-discovery,* add the following code to your `config/app.php` file:

```php
SchierProducts\SchierProductApi\SchierProductApiServiceProvider::class,
```

#### Using the Facade

If you want to use the facade to quickly access the API, add the following code to your facades within the `config/app.php` file:

```php
'ProductApi' => SchierProducts\SchierProductApi\Facades\ProductApi::class,
```

#### Publish the package's settings to your application

This will publish this package's configuration file `product-api.php` to your application's `config` directory.

```bash
php artisan vendor:publish --provider="SchierProducts\SchierProductApi\SchierProductApiServiceProvider"
```

## Lists

When a list of resources are retrieved from the API, they are parsed and returned within an instance of `SchierProducts\SchierProductApi\Collection`. This class exposes a few methods for you to sort through the results.

* `allItems()` - Returns the entire array of objects.
* `offsetGet(3)` - Returns the item at the index defined the index parameter
* `count()` - Returns the `integer` of results in the array
* `isEmpty()` - Returns a `boolean` if the result array is empty
* `first()` - Assuming the list of resources is not empty, returns the first one
* `last()` - Assuming the list of resources is not empty, returns the last one

## Resources

Below are a list of resources/data that you can retrieve via this package:

### Product Types

#### List of product types

Via the client *(assuming you have already called the constructor)*:

```php
$productTypes = $productApiClient->productTypes->all();
```

Via the facade:

```php
$productTypes = \ProductApi::productTypes->all();
```

#### A specific product type

Via the client *(assuming you have already called the constructor)*:

```php
$samplingPort = $productApiClient->productTypes->retrieve('sampling_port');
```

Via the facade:

```php
$samplingPort = \ProductApi::productTypes->retrieve('sampling_port');
```

#### A list of products within a product type

Via the client *(assuming you have already called the constructor)*:

```php
$samplingPortProducts = $productApiClient->productTypes->products('sampling_port');
```

Via the facade:

```php
$samplingPortProducts = \ProductApi::productTypes->products('sampling_port');
```

#### A list of products from a product type

Via the client *(assuming you have already called the constructor)*:

```php
$productTypes = $productApiClient->productTypes->all();
$firstProductType = $products->first();
$products = $firstProductType->products();
```

Via the facade:

```php
$productTypes = \ProductApi::productTypes->all();
$firstProductType = $products->first();
$products = $firstProductType->products();
```