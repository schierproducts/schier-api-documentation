---
title: GET Space (by Id)
description: Return a list of spaces that are associated with a Grease Monkey project.
sidebarDepth: 0
---

# GET Space

Retrieve a specific shell space by id.

## Endpoint

``` http
GET /api/spaces/:id
```

::: tip Note
If the parent project does not have the `construction_type` value of `Shell Space`, this response will **always return a 404 error**.
:::

## Sample Response

```json
{
    "object": "space",
    "url": "/api/spaces/645",
    "id": 645,
    "name": "Suite 100",
    "square_footage": 1655,
    "created": "06/11/2018",
    "project": {
        "id": "1768",
        "name": "River Crossing Strip Mall"
    }
}
```

## Responses

### 200 <Badge text="created" type="success" />

A shell space has been found and retrieved successfully.

### 404 <Badge text="error" type="error" />

The shell space that was requested does not exist.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested shell space identified by 1234 could not be found."
    }
  ]
}
```