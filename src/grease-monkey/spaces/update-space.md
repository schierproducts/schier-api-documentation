---
title: PUT Update Space
description: Update an existing project space that makes up a shell space building.
sidebarDepth: 0
auth: true
---

# PUT Update a Space

Update an existing project space that makes up a shell space building.

## Endpoint

``` http
PUT /api/spaces/:id
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
https://app.greasemonkeysizing.com/api/spaces/645
```

#### Body

```json
{
  "name": "Suite 1300",
  "square_footage": 2600
}
```

### Sample Response

Upon a successful update of a space, a new instance of the [Shell Space Object](/grease-monkey/spaces#the-space-object) will be returned with an **HTTP status code of 200**.

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

### 200 <Badge text="created" type="success" />

The identified shell space has been updated and the project re-compiled.

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

The designated shell space could not be found.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested shell space identified by 645 could not be found."
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