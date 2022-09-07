---
title: DELETE Project
description: Delete a project and all associated kitchen fixtures, spaces, etc.
sidebarDepth: 0
---

# DELETE Kitchen Fixture

Delete a project and all associated kitchen fixtures, spaces, etc.

## Endpoint

``` http
DELETE /api/projects/:id
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |

### Body

No body and/or JSON payload is required.

## Responses

### 204 <Badge text="success" type="success" />

The project has been removed successfully.

### 403 <Badge text="error" type="error" />

The project could not be deleted because the project is not in an editable state.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Authorized",
      "status": 403,
      "detail": "This project has a status of 'Pending,' and thus cannot be modified."
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
      "detail": "The requested project identified by 1234 could not be found."
    }
  ]
}
```