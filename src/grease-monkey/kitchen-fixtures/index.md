---
title: Kitchen Fixtures
description: Expected response information from the Kitchen Fixture data type
sidebarDepth: 0
---

# Kitchen Fixtures

This object references a kitchen fixture that is added within the sizing process.

::: tip Note
If the `typical_measurements` property is `false` then the dimensions are user-provided.
:::

## The Kitchen Fixture Object

```json
{
  "name": "3 comp sink",
  "type": "3 Compartment Sink",
  "uses_typical_dimensions": true,
  "dimensions": {
    "object": "dimension-set",
    "standard": {
      "object": "dimensions",
      "length": {
        "value": 21,
        "unit": "in",
        "object": "measurement"
      },
      "width": {
        "value": 21,
        "unit": "in",
        "object": "measurement"
      },
      "height": {
        "value": 14,
        "unit": "in",
        "object": "measurement"
      },
      "volume": {
        "value": 6174,
        "unit": "sq in",
        "object": "measurement"
      },
      "capacity": {
        "value": 80,
        "unit": "gal",
        "object": "measurement"
      }
    },
    "metric": {
      "object": "dimensions",
      "length": {
        "value": 53.3,
        "unit": "cm",
        "object": "measurement"
      },
      "width": {
        "value": 53.3,
        "unit": "cm",
        "object": "measurement"
      },
      "height": {
        "value": 35.6,
        "unit": "cm",
        "object": "measurement"
      },
      "volume": {
        "value": 15682,
        "unit": "sq cm",
        "object": "measurement"
      },
      "capacity": {
        "value": 302.8,
        "unit": "L",
        "object": "measurement"
      }
    }
  },
  "flow_rate": {
    "one_minute": {
      "standard": {
        "value": 60,
        "unit": "GPM",
        "object": "measurement"
      },
      "metric": {
        "value": 3.8,
        "unit": "L/s",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "two_minute": {
      "standard": {
        "value": 30,
        "unit": "GPM",
        "object": "measurement"
      },
      "metric": {
        "value": 1.9,
        "unit": "L/s",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "dfu": 6
  }
}
```

### Attributes

::: details name <span class="code-note">string</span>
The name of the kitchen fixture provided by the user
:::

::: details type <span class="code-note">string</span>
The type of kitchen fixture; sink, soup kettle, dishwasher, etc
:::

::: details uses_typical_dimensions <span class="code-note">boolean</span>
If the kitchen fixture uses "typical dimensions." These dimensions are globally generic dimensions that are industry standards.
:::

::: details dimensions <span class="code-note">object</span>
The footprint dimensions in both standard and metric of the kitchen fixture. Depending on the type of fixture, some of these values may/may not be used.

```json
{
  "object": "dimension-set",
  "standard": {
    "object": "dimensions",
    "length": {
      "value": 21,
      "unit": "in",
      "object": "measurement"
    },
    "width": {
      "value": 21,
      "unit": "in",
      "object": "measurement"
    },
    "height": {
      "value": 14,
      "unit": "in",
      "object": "measurement"
    },
    "volume": {
      "value": 6174,
      "unit": "sq in",
      "object": "measurement"
    },
    "capacity": {
      "value": 80,
      "unit": "gal",
      "object": "measurement"
    }
  },
  "metric": {
    "object": "dimensions",
    "length": {
      "value": 53.3,
      "unit": "cm",
      "object": "measurement"
    },
    "width": {
      "value": 53.3,
      "unit": "cm",
      "object": "measurement"
    },
    "height": {
      "value": 35.6,
      "unit": "cm",
      "object": "measurement"
    },
    "volume": {
      "value": 15682,
      "unit": "sq cm",
      "object": "measurement"
    },
    "capacity": {
      "value": 302.8,
      "unit": "L",
      "object": "measurement"
    }
  }
}
```
:::

::: details flow_rate <span class="code-note">object</span>
The amount of flow produced by this kitchen fixture. These values can depend on the fixture type and the physical dimensions

```json
{
  "one_minute": {
    "standard": {
      "value": 60,
      "unit": "GPM",
      "object": "measurement"
    },
    "metric": {
      "value": 3.8,
      "unit": "L/s",
      "object": "measurement"
    },
    "object": "dimension-set"
  },
  "two_minute": {
    "standard": {
      "value": 30,
      "unit": "GPM",
      "object": "measurement"
    },
    "metric": {
      "value": 1.9,
      "unit": "L/s",
      "object": "measurement"
    },
    "object": "dimension-set"
  },
  "dfu": 6
}
```
:::