---
title: GET Menu Types
description: Return a list of available menu types (food genres) classifies the restaurant or FSE that will house the interceptor.
sidebarDepth: 0
auth: true
---

# GET Menu Types

Return a list of available menu types (food genres) classifies the restaurant or FSE that will house the interceptor.

## The Menu Types Object

The Menu Type object provides a combination of label and key.

```json
{
  "object": "object",
  "name": "New Construction",
  "key": "newConstruction"
}
```

### Explanation of Values

| Value                       | Description                                                  |
|-----------------------------|--------------------------------------------------------------|
| `name`                      | The *human-friendly* name of the construction type           |
| `key`                       | The enumerated-key used to associate this type to a project. |


## Endpoint

``` http
GET /api/construction-types
```

## Sample Response

```json
{
    "object": "list",
    "url": "/api/construction-types",
    "data": [
      {
        "object": "object",
        "name": "New Construction",
        "key": "newConstruction"
      },
      {
        "object": "object",
        "name": "Remodel / Tenant Finish",
        "key": "tenantFinish"
      },
      {
        "object": "object",
        "name": "Shell Space (Unknown Tenant)",
        "key": "shell"
      },
      ...
    ]
}
```

## Responses

### 200 <Badge text="success" type="success" />

A list of construction types will be returned.