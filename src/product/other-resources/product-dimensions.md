---
description: A set of dimensions (length, width, height, weight) for a product. Can contain dimensions for either shipping/non-shipping purposes.
---

# Product Dimensions

A set of dimensions (length, width, height, weight) for a product. Can contain dimensions for either shipping/non-shipping purposes.

## The Product Dimensions Object

```json
{
  "object": "dimensions",
  "length": {
    "value": 87,
    "unit": "in",
    "object": "measurement"
  },
  "width": {
    "value": 33,
    "unit": "in",
    "object": "measurement"
  },
  "height": {
    "value": 44,
    "unit": "in",
    "object": "measurement"
  },
  "weight": {
    "value": 376,
    "unit": "lbs",
    "object": "measurement"
  }
}
```