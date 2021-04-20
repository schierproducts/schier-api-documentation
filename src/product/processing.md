---
description: The processing portion of this API enables users to access the current lead time of each of Schier's products.
---

# Processing Awareness and Fulfillment

The processing portion of this API enables users to access the current lead/processing time of each of Schier's products needed to construct the product and make it ready for shipment.

## Base Endpoints

```http
GET /processing?product=:product-name
```

## The Processing Awareness Object

```json
{
  "object": "awareness-product",
  "url": "/processing?product=GB-250",
  "name": "GB-250",
  "lead_time": 6,
  "threshold": 12
}
```

### Attributes

`name` <span class="code-note">string</span>

The name of the product.

`lead_time` <span class="code-note">integer</span>

The number of business days currently required to construct the requested product before it is ready for shipment.

`threshold` <span class="code-note">integer</span>

When purchasing the requested product in bulk quantities, when the number of purchased units exceeds this amount additional lead/processing time will be required.