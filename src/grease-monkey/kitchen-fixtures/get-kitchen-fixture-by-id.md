---
title: GET Kitchen Fixture (by Id)
description: Return a single kitchen fixture associated with a Grease Monkey project.
sidebarDepth: 0
auth: true
---

# GET Kitchen Fixture

Return a single kitchen fixture associated with a Grease Monkey project.

## Endpoint

``` http
GET /api/kitchen-fixtures/:id
```

## Sample Response

```json
{
    "object": "object",
    "url": "/api/kitchen-fixtures/6532",
    "data": {
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
        }
    }
}
```

## Responses

### 200 <Badge text="success" type="success" />

If successful, the API will return an instance of [a kitchen fixture](/grease-monkey/kitchen-fixtures/#the-kitchen-fixture-object).

### 404 <Badge text="error" type="error" />

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested kitchen fixture identified by 1234 could not be found."
    }
  ]
}
```