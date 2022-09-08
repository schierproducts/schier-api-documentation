---
title: POST Create Space
description: Create a new space that makes up a shell space building.
sidebarDepth: 0
auth: true
---

# POST Create a Space

Create a new space that makes up a shell space building.

## Endpoint

``` http
POST /api/projects/:id/spaces
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |

### Required Fields

| Field             | Type          |
|-------------------|---------------|
| `name`            | string        |
| `square_footage`  | integer       |

### Body

**name** | `string` : The name of the shell space.

**amount** | `integer` : The amount of square footage that the newly created space will occupy. **Must be a whole number**.

### Sample Request

#### URL

```bash
https://app.greasemonkeysizing.com/api/projects/1688/spaces
```

#### Body

```json
{
  "name": "Suite 1300",
  "square_footage": 2600
}
```

### Sample Response

Upon a successful creation/addition of a space, a new instance of the [Shell Space Object](/grease-monkey/spaces#the-space-object) will be returned with an **HTTP status code of 201**.

```json
{
  "object": "space",
  "url": "/api/spaces/645",
  "id": 645,
  "name": "Suite 1300",
  "square_footage": 2600,
  "created": "09/07/2022",
  "project": {
    "id": "1688",
    "name": "Wendy's #1233"
  }
}
```

## Responses

### 201 <Badge text="created" type="success" />

A new instance of the Space Object has been created and applied to a project.

### 403 <Badge text="error" type="error" />

The request has not permitted based on logic or user access.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Authorized",
      "status": 403,
      "detail": "The project that this fixture is being added to is in a closed state."
    }
  ]
}
```

### 404 <Badge text="error" type="error" />

The project that the new space will be applied to does not exist.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested project identified by 1688 could not be found."
    }
  ]
}
```

### 422 <Badge text="error" type="error" />

The request is rejected because a property is not valid or the required properties were not provided.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Request Not Valid",
      "status": 422,
      "detail": "Please provide a valid square footage integer for this space."
    }
  ]
}
```