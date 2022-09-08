---
title: Search
description: Enables each of the various Grease Monkey API's to be searched against
next: /grease-monkey/other-resources/
auth: true
---

# Search

You can extract string-based query searches from the Grease Monkey API; powered by [Algolia](http://algolia.com). The search resource utilizes the same API endpoint for each of the various models.

## Base Endpoint

```http request
GET /api/search
```

## Response

The search API does not use a standard structure like that of the [Users](/grease-monkey/users.html), [Projects](/grease-monkey/projects.html), or [Jurisdictions](/grease-monkey/jurisdictions.html) APIs. The response of this endpoint will depend on the resource/model that is queried. Refer to each resource's documentation accordingly.

### Example

So for example, if you wanted to search "smoothie" against the projects API, the request would look something like this:

```http request
GET /api/search?type=project&query=smoothie
```

## Parameters

### type

<span class="code-note">required, string</span>

The resource/API that the search request will be made against. The available options are:

* `user`
* `jurisdiction`
* `project`

### query

<span class="code-note">required, string, url-encoded</span>

The search query to be searched against.

### Other Parameters

`limit` <span class="code-note">optional, default: 25</span>

`offset` <span class="code-note">optional, default: 0</span>