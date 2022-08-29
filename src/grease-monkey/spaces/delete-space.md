---
title: DELETE Space
description: Delete a space from a desired project.
sidebarDepth: 0
---

# DELETE Space

Delete a space from a desired project.

## Endpoint

``` http
DELETE /api/spaces/:id
```

## Responses

### 204 <Badge text="success" type="success" />

The space has been removed successfully, and the project will be re-compiled.

### 403 <Badge text="error" type="error" />

The space could not be deleted because the project is not in an editable state.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Authorized",
      "status": 403,
      "detail": "The project that this space is associated has a status of 'Pending,' and thus cannot be modified."
    }
  ]
}
```

### 404 <Badge text="error" type="error" />

The project could not be found.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested space identified by 1234 could not be found."
    }
  ]
}
```