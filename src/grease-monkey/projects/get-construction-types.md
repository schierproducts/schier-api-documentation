---
title: GET Construction Types
description: Return a list of key/value pairs that indicate the types of available construction types.
sidebarDepth: 0
auth: true
---

# GET Project Construction Types

Return a list of key/value pairs that indicate the types of available construction types.

## The Construction Types Object

The Installation Location object provides a combination of label and key.

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