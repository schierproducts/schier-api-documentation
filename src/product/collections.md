---
description: Collections are custom lists of products to further categorize and sort the products beyond product type. Common use-cases are products approved by jurisdiction, high flow rate models, etc.
---

# Collections

Collections are custom lists of products to further categorize and sort the products beyond product type. Common use-cases are products approved by jurisdiction, high flow rate models, etc.

## Base Endpoints

```http
GET /collections
GET /collections/:slug
```

## The Collection Object

```json
{
  "object": "collection",
  "url": "/collections/gb-250",
  "name": "GB-250",
  "key": "gb-250",
  "size": 0,
  "image": {
    "orig": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image.png",
    "lg": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_lg.png",
    "md": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_md.png",
    "sm": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_sm.png",
    "object": "image-library"
  },
  "items": {
    "object": "list",
    "data": []
  }
}
```

### Attributes

`name` <span class="code-note">string</span>

The name of the collection.

`key` <span class="code-note">string</span>

The collection's key, *or slug*, that is unique to each collection. This can also be used to retrieve an individual collection and its associated products.

`size` <span class="code-note">integer</span>

The number of products that the collection contains.

`image` <span class="code-note">string</span>

An image thumbnail to provide a sample image of what this product type looks like. This is optional, so a fallback image may be provided.

`items` <span class="code-note">object, array</span>

The list of products within that collection.

[Also see Product Object](/product/products.html#the-product-object)

## List of Collections

Returns a list of product collections within the Product API

``` http
GET /collections
```

### Parameters

#### only

<span class="code-note block">optional, array or string</span>

Collections filtered by the key. This parameter can be either a single zip code (as a string):

``` http
/collections?only=64108
```

or an array of zip codes:

``` http
/collections?only[]=gb-250&only[]=gb-75
```

#### limit

<span class="code-note block">optional, integer</span>

Limits the number of collections returned in the response.

``` http
/collections?limit=5
```

## Collection by Key

Returns an individual product collection by the collection key ([see object attributes](#attributes))

``` http
GET /collections/gb-1
```

So in this example, the `sgb-1` segment of the URL is the product type key.