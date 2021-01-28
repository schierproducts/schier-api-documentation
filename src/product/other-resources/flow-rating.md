---
description: A flow rate configuration for a product that dictates the amount of flow and capacity that it can have.
---

# Flow Rating

A flow rate configuration for a product that dictates the amount of flow and grease capacity that it can have. Multiple ratings can be applied to a single product; adding support for a higher flow rate at the sacrifice for a lower capacity.

## The Flow Rating Object

Each value of the Flow Rating object comes with both a US standard calculation and a metric equivalent.

```json
{
  "flow_rate": {
    "standard": {
      "value": 100,
      "unit": "GPM",
      "object": "measurement"
    },
    "metric": {
      "value": 6.3,
      "unit": "L/s",
      "object": "measurement"
    },
    "object": "dimension-set"
  },
  "grease_capacity": {
    "weight": {
      "standard": {
        "value": 1895,
        "unit": "lbs",
        "object": "measurement"
      },
      "metric": {
        "value": 859.4,
        "unit": "kg",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "volume": {
      "standard": {
        "value": 259.59,
        "unit": "gal",
        "object": "measurement"
      },
      "metric": {
        "value": 982.7,
        "unit": "L",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "object": "grease-capacity-measurement"
  },
  "label": null,
  "object": "rating"
}
```

### Attributes

`flow_rate` <span class="code-note">object</span>

The amount of flow that can be handled over a period of time.

**Default:** GPM (Gallons Per Minute)

`grease_capacity` <span class="code-note">object</span>

The amount of grease that the interceptor can hold before loosing it's efficiency and needing to be pumped out. Schier typically sizes by pounds of grease, but the industry standard is gallons.

**Default:** Weight (Weight/Pounds)

`label` <span class="code-note">optional, string</span>

With some products, the flow rating requires a label to indicate its use.