---
title: GET a Project (by Id)
description: Returns an individual Grease Monkey project identified by ID.
sidebarDepth: 0
---

# GET Project by ID

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

#### fixtures

<span class="code-note block">optional, boolean</span>

If you would like to include the list of kitchen fixtures and their detailed information.

Also [see Kitchen Fixtures](/grease-monkey/other-resources/kitchen-fixtures.html).

``` http
/api/projects/1320?fixtures=true
```

::: warning Notice
Due to the highly-verbose nature of this information, requesting this information is cautioned; especially with high-latency network connections.
:::