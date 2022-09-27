---
title: GET Interior Locations
description: Return a list of key/value pairs that indicate where the interceptor will be located specifically within the structure.
sidebarDepth: 0
auth: true
---

# GET Interior Locations

Return a list of key/value pairs that indicate where the interceptor will be located specifically within the structure.

## The Interior Location Object

The Interior Location object provides a combination of label and key.

```json
{
  "object": "object",
  "name": "In Basement",
  "key": "inBasement"
}
```

### Explanation of Values

| Value                       | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| `name`                      | The *human-friendly* name of the location                    |
| `key`                       | The enumerated-key used to associate this type to a project. |


## Endpoint

``` http
GET /api/interior-locations
```

## Sample Response

```json
{
    "object": "list",
    "url": "/api/interior-locations",
    "data": [
      {
        "object": "object",
        "name": "Kitchen",
        "key": "kitchen"
      },
      {
        "object": "object",
        "name": "In Basement",
        "key": "inBasement"
      },
      {
        "object": "object",
        "name": "Parking Garage",
        "key": "parkingGarage"
      },
      ...
    ]
}
```

## Responses

### 200 <Badge text="success" type="success" />

A list of available interior locations will be returned.