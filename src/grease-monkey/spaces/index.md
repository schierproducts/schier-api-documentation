---
title: Spaces
description: Expected responses/schema for a compartmentalized space within a larger structure.
sidebarDepth: 0
---

# Spaces

Expected responses/schema for a compartmentalized space within a larger structure.

## The Space Object

When retrieve a list of objects, the amount of meta that is returned via the API is limited to help reduce latency and potential memory issues that may happen when consuming large objects.

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
    "name": "Wendy's #1233"
  }
}
```

::: details id <span class="code-note">integer</span>
The unique id of the space
:::

::: details name <span class="code-note">string</span>
The designated name of the space; usually a building number or suite number
:::

::: details square_footage <span class="code-note">integer</span>
The amount of square footage that this space contains
:::

::: details project <span class="code-note">object</span>
If the resulting interceptor is going to be installed indoors, where specifically. Different options may be available depending on the project's jurisdiction. 
:::