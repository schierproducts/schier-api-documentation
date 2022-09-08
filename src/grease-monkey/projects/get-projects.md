---
title: GET All Projects
description: Get a list of Grease Monkey Projects or individual project.
sidebarDepth: 0
---

# GET All Grease Monkey Projects

Retrieve a paginated list of Grease Monkey projects with related engineer and jurisdiction information.

## Endpoint

``` http
GET /api/projects
```

### Parameters

#### zip_codes

<span class="code-note block">optional, array or string</span>

Projects filtered by the zip code provided in the location's address. This parameter can be either a single zip code (as a string):

``` http
/api/projects?zip_codes=64108
```

or an array of zip codes:

``` http
/api/projects?zip_codes[]=64108&zip_codes[]=66061
```

#### types

<span class="code-note block">optional, array or string</span>

Projects filtered by their specified construction type. This parameter can be either a single type (as a string):

``` http
/api/projects?types=newConstruction
```

or an array of types:

``` http
/api/users?types[]=newConstruction&types[]=tenantFinish
```

##### Available Values

* newConstruction
* tenantFinish
* shell
* interceptorReplacement

### Other Parameters

`limit` <span class="code-note">optional, default: 25</span>

`offset` <span class="code-note">optional, default: 0</span>