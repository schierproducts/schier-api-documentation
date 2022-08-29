---
title: DELETE Kitchen Fixture
description: Detatch a kitchen fixture from project and remove it.
sidebarDepth: 0
---

# DELETE Kitchen Fixture

Detatch a kitchen fixture from project and remove it.

## Endpoint

``` http
DELETE /api/kitchen-fixtures/:id
```

## Responses

### 204 <Badge text="success" type="success" />

The kitchen fixture has been removed successfully, and the project will be re-compiled.

### 403 <Badge text="error" type="error" />

The kitchen fixture could not be deleted because the project is not in an editable state.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Authorized",
      "status": 403,
      "detail": "The project that this fixture is associated has a status of 'Pending,' and thus cannot be modified."
    }
  ]
}
```

### 404 <Badge text="error" type="error" />

The kitchen fixture could not be found.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested project identified by 1234 could not be found."
    }
  ]
}
```