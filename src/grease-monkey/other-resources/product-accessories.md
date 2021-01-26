---
description: Expected response information from notes that have been attached to either a jurisdiction or project
---

# Product Accessories

This object refers to an accessory/component (product attachment) that has been assigned to the project based on the installation methods, or by the jurisdictions requirements. However, despite the fact it is attached to a project, does not mean that it is required for the installation to be valid.

## The Product Accessory Object

```json
{
  "name": "PP2",
  "price": {
    "list": "216.00",
    "retail": {
      "multiplier": 0.7,
      "price": "151.20",
      "object": "price"
    },
    "wholesale": {
      "multiplier": 0.55,
      "price": "118.80",
      "object": "price"
    },
    "object": "product-price"
  },
  "model_number": "8400-013-01",
  "active": false,
  "description": "Converts an unused outlet into a pumpout port. Includes internal pumpout fitting and piping and a 3\" cam and groove fitting with cap. Use with Great Basin™ models GB-50, GB-75 and GB-250.",
  "product_page": "https:\/\/schierproducts.com\/pp2\/",
  "type": "Pumpout Port Kit"
}
```

### Attributes

`name` <span class="code-note">string</span>

The name of the accessory within the application and eCommerce store front

`price` <span class="code-note">object</span>

Pricing information for the product. This object describes the various price breakpoints depending on the method/location of purchase.

`model_number` <span class="code-note">string</span>

Schier's internal model number of this product.

::: tip Note
This model number can be used to retrieve more information about the product via [Schier's Product API](https://api.schierproducts.com)
:::

`active` <span class="code-note">boolean</span>

If the accessory is actively being recommended or has been sunset.

`description` <span class="code-note">optional, string</span>

A brief marketing description about the product.

`product_page` <span class="code-note">optional, string</span>

A link to the product on the eCommerce platform.

`type` <span class="code-note">string</span>

The type of product/component/accessory.