---
next: false
---

# Pagination

All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list products, product types, projects, users, etc. These list API methods share a common structure taking at least 2 parameters:

* `limit`
* `offset`

Schier's APIs uses these cursor-based parameters to simulate pagination that is common in multiple applications and websites when displaying large amounts of data.

## Parameters

### limit

`limit` <span class="code-note">optional, default: 25</span>

The maximum number of items that will be returned with the response. This can particularly be helpful if the payload is relatively large. Will accept any valid integer.

### offset

`offset` <span class="code-note">optional, default: 0</span>

The number of items in the list to be offset, or "skipped," from your query. For example, if you had 50 items in your list, provide an offset parameter with a value of `25` and the API will provide you the next set of 25 results, instead of the first set.

## List Response Format

### object

`object` <span class="code-note">string, value is "list"</span>

A string describing the type of object that is returned. This is often used to tell our package wrappers which object to parse the JSON response as.

### data

`data` <span class="code-note">array</span>

A list of JSON objects, representing elements.

### url

`url` <span class="code-note">string</span>

The url that can be sent to the API to replicate this response.