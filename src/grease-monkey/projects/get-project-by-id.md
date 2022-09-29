---
title: GET Retrieve Project (by Id)
description: Returns an individual Grease Monkey project identified by ID.
sidebarDepth: 0
auth: true
---

# GET Retrieve project by ID

Returns an individual Grease Monkey project identified by ID

## Endpoint

``` http
GET /api/projects/:id
```

### Parameters

#### notes

<span class="code-note block">optional, boolean</span>

If you would like to include the project's Schier Admin-generated notes.

[Also see Notes](/grease-monkey/other-resources/notes.html)

``` http
/api/projects/1320?notes=true
```

::: tip Note
This defaults to false because of the large amount of information that can be included with this response.
:::

#### accessories

<span class="code-note block">optional, boolean</span>

If you would like to include the list of recommended, compatible accessories for this project.

``` http
/api/projects/1320?accessories=true
```

[Also see Product Accessories](/grease-monkey/other-resources/product-accessories.html)

::: tip Note
This defaults to false because of the large amount of information that can be included with this response.
:::

#### Kitchen Fixtures

If you would like to include the list of kitchen fixtures and their detailed information.

``` http
/api/projects/1320?fixtures=true
```

[Also see GET Kitchen Fixtures from Project](/grease-monkey/kitchen-fixtures/get-kitchen-fixtures-from-project-by-id).

::: warning Notice
Due to the highly-verbose nature of this information, requesting this information is cautioned; especially with high-latency network connections.
:::

## Responses

### 200 <Badge text="success" type="success" />

If successful, the API will respond with an instance of the Project Object.

[View Project Object](/grease-monkey/projects/#the-project-object)

### 404 <Badge text="error" type="error" />

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