# SDK Reference

## Lists

Lists are long responses that provide catalogs of results like products, product types, etc. This structure is widely used through this API and it's associated SDK's.

When a list of resources are retrieved from the API, they are parsed and returned within an instance of `SchierProducts\SchierProductApi\Collection`. This class exposes a few methods for you to sort through the results. If you are familiar with [Laravel's Collection ](https://laravel.com/docs/10.x/collections) usage, then you should feel right at home.

{type="full"}
allItems()
: Returns the entire array of objects.

offsetGet(3)
: Returns the item at the index defined the index parameter.

count()
: Returns the `integer` of results in the array.

isEmpty()
: Returns a `boolean` if the result array is empty.

first()
: Assuming the list of resources is not empty, returns the first one.

last()
: Assuming the list of resources is not empty, returns the last one.

## Resources

Below are a list of resources/data that you can retrieve via this package:

### Product Types

A product type is essentially a category or classification that is applied to a product.

#### List of product types

Fetch a list of product types.

<tabs group="stack">
<tab title="Vanilla PHP" group-key="php">

```php
// via the constructor
use SchierProducts\SchierProductApi\ApiClients\ProductApi\ProductApiClient;
...
$productApiClient = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
$productTypes = $productApiClient->productTypes->all();
```
</tab>
<tab title="Laravel Facade" group-key="laravel">

```php
// via the facade
$productTypes = \SchierApi::product()->productTypes();
```
</tab>
</tabs>

#### A specific product type

Fetch a single product type based on the provided key.

<tabs group="stack">
<tab title="Vanilla PHP" group-key="php">

```php
// via the constructor
use SchierProducts\SchierProductApi\ApiClients\ProductApi\ProductApiClient;
...
$productApiClient = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
$samplingPort = $productApiClient->productTypes->retrieve('sampling_port');
```
</tab>
<tab title="Laravel Facade" group-key="laravel">

```php
// via the facade
$samplingPort = \SchierApi::::product()->productTypes('sampling_port');
```
</tab>
</tabs>

#### A list of products within a product type

Return a list of products that are categorized and/or assigned to a specific product type.

<tabs group="stack">
<tab title="Vanilla PHP" group-key="php">

```php
// via the constructor
use SchierProducts\SchierProductApi\ApiClients\ProductApi\ProductApiClient;
...
$productApiClient = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
$productTypes = $productApiClient->productTypes->all();
$firstProductType = $productTypes->first();
$products = $firstProductType->products();
```
</tab>
<tab title="Laravel Facade" group-key="laravel">

```php
// via the facade
$productTypes = \SchierApi::productTypes();
$firstProductType = $productTypes->first();
$products = $firstProductType->products();
```
</tab>
</tabs>

### Products

A product is a singular element that represents a physical item within Schier's product catalog.

#### List of products

Fetch a list of products.

<tabs group="stack">
<tab title="Vanilla PHP" group-key="php">

```php
// via the constructor
use SchierProducts\SchierProductApi\ApiClients\ProductApi\ProductApiClient;
...
$productApiClient = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
$products = $productApiClient->products->all();
```
</tab>
<tab title="Laravel Facade" group-key="laravel">

```php
// via the facade
$products = \SchierApi::product()->products();
```
</tab>
</tabs>

#### Get a product by model number

Fetch a single product by it's Schier-assigned model number

<tabs group="stack">
<tab title="Vanilla PHP" group-key="php">

```php
// via the constructor
use SchierProducts\SchierProductApi\ApiClients\ProductApi\ProductApiClient;
...
$productApiClient = new ProductApiClient([
    'api_key' => 'YOUR API KEY'
]);
$products = $productApiClient->products->retrieve('8030-003-01');
```
</tab>
<tab title="Laravel Facade" group-key="laravel">

```php
// via the facade
$products = \SchierApi::product()->products('8030-003-01');
```
</tab>
</tabs>
