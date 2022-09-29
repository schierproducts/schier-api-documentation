---
title: POST Submit Projects for Review
description: Send a list of projects to the Regulatory Compliance Specialists for specification review.
sidebarDepth: 0
auth: true
---

# POST Submit Projects for Review

Send a list of projects to the Regulatory Compliance Specialists for specification review.

## Endpoint

``` http
POST /api/projects/submit
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |


### Required Fields

| Field         | Type                 |
|---------------|----------------------|
| `project_ids` | array&lt;integer&gt; |

### Body

**project_ids** | `array` : An array of valid project ids that will submit the projects for review.

::: tip Note
The project must have the `"available_for_submission": true` property/value in order for it be submitted. If not, the API will error accordingly.
:::

### Sample Request

#### URL

```bash
https://app.greasemonkeysizing.com/api/projects/submit
```

#### Body

```json
{
  "project_ids": [
    4027,
    4028,
    4029,
    4030
  ]
}
```

## Responses

### 204 <Badge text="success" type="success" />

If the entire request is valid and there are no issues, all projects will be submitted.

### 400 <Badge text="error" type="error" />

At least one of the projects that you are trying to submit is not valid and thus cannot be submitted.

::: tip Note
The API will try to submit all provided ids; even if a portion of the request is invalid.
:::

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Bad Request",
      "status": 400,
      "detail": "Project 1234 is not valid and cannot be submitted."
    }
  ]
}
```

### 403 <Badge text="error" type="error" />

The API token is not authorized to perform this action.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Unauthorized",
      "status": 403,
      "detail": "The API token that you are using is not allowed to do this."
    }
  ]
}
```

