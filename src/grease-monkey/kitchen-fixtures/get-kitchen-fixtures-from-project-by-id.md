---
title: GET Kitchen Fixtures from Project (by Id)
description: Return a list of kitchen fixtures that are associated with a Grease Monkey project.
sidebarDepth: 0
---

# GET Kitchen Fixtures from Project

Return a list of kitchen fixtures that are associated with a Grease Monkey project.

## Endpoint

``` http
GET /api/projects/:id/kitchen-fixtures
```

## Sample Response

```json
{
    "object": "list",
    "url": "/api/projects/1320/kitchen-fixtures",
    "data": [
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
                        "unit": "L\/s",
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
                        "unit": "L\/s",
                        "object": "measurement"
                    },
                    "object": "dimension-set"
                },
                "dfu": 6
            }
        },
        {
            "name": "Dump Sink",
            "type": "Dump Sink One Bowl",
            "uses_typical_dimensions": true,
            "dimensions": {
                "object": "dimension-set",
                "standard": {
                    "object": "dimensions",
                    "length": {
                        "value": 10,
                        "unit": "in",
                        "object": "measurement"
                    },
                    "width": {
                        "value": 14,
                        "unit": "in",
                        "object": "measurement"
                    },
                    "height": {
                        "value": 6,
                        "unit": "in",
                        "object": "measurement"
                    },
                    "volume": {
                        "value": 840,
                        "unit": "sq in",
                        "object": "measurement"
                    },
                    "capacity": {
                        "value": 3.64,
                        "unit": "gal",
                        "object": "measurement"
                    }
                },
                "metric": {
                    "object": "dimensions",
                    "length": {
                        "value": 25.4,
                        "unit": "cm",
                        "object": "measurement"
                    },
                    "width": {
                        "value": 35.6,
                        "unit": "cm",
                        "object": "measurement"
                    },
                    "height": {
                        "value": 15.2,
                        "unit": "cm",
                        "object": "measurement"
                    },
                    "volume": {
                        "value": 2133.6,
                        "unit": "sq cm",
                        "object": "measurement"
                    },
                    "capacity": {
                        "value": 13.8,
                        "unit": "L",
                        "object": "measurement"
                    }
                }
            },
            "flow_rate": {
                "one_minute": {
                    "standard": {
                        "value": 3.64,
                        "unit": "GPM",
                        "object": "measurement"
                    },
                    "metric": {
                        "value": 0.2,
                        "unit": "L\/s",
                        "object": "measurement"
                    },
                    "object": "dimension-set"
                },
                "two_minute": {
                    "standard": {
                        "value": 1.82,
                        "unit": "GPM",
                        "object": "measurement"
                    },
                    "metric": {
                        "value": 0.1,
                        "unit": "L\/s",
                        "object": "measurement"
                    },
                    "object": "dimension-set"
                },
                "dfu": 2
            }
        }
    ]
}
```