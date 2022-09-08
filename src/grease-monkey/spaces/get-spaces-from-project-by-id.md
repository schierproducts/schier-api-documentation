---
title: GET Spaces from Project (by Id)
description: Return a list of spaces that are associated with a Grease Monkey project.
sidebarDepth: 0
auth: true
---

# GET Spaces from Project

Return a list of spaces that are associated with a Grease Monkey project.

## Endpoint

``` http
GET /api/projects/:id/spaces
```

::: tip Note
If the parent project does not have the `construction_type` value of `Shell Space`, the `data` property of this response will always be an empty array.
:::

## Sample Response

```json
{
    "object": "list",
    "url": "/api/projects/1768/spaces",
    "data": [
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
      },
      {
        "object": "space",
        "url": "/api/spaces/646",
        "id": 646,
        "name": "Suite 120",
        "square_footage": 2000,
        "created": "06/11/2018",
        "project": {
          "id": "1768",
          "name": "River Crossing Strip Mall"
        }
      }
    ]
}
```