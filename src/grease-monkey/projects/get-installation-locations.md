---
title: GET Project Indoor Installation Locations
description: Return a list of available locations on where the project can be installed when located indoors.
sidebarDepth: 0
auth: true
---

# GET Project Indoor Installation Locations

Return a list of available locations on where the project can be installed when located indoors.

## The Indoor Installation Location Object

The Installation Location object provides a combination of label and key.

```json
{
  "object": "object",
  "name": "Kitchen",
  "key": "kitchen"
}
```

### Explanation of Values

| Value                       | Description                                                      |
|-----------------------------|------------------------------------------------------------------|
| `name`                      | The *human-friendly* name of the location                        |
| `key`                       | The enumerated-key used to associate this location to a project. |


## Endpoint

``` http
GET /api/indoor-installation-locations
```

### Parameters

#### project_id

<span class="code-note block">optional, integer</span>

In some cases, different locations will be available/required based on the project's location and/or jurisdiction assignment. In the event that you want to return locations based on the project, append the newly-created project's id as a url parameter.

``` http
/api/indoor-installation-locations?project_id=689
```

::: tip Note
In order for these values to be accurate, a valid address must be added to the project and assigned to a jurisdiction. 
:::

## Sample Response

```json
{
    "object": "list",
    "url": "/api/indoor-installation-locations",
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

A list of installation locations will be returned.