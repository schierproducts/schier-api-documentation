---
title: Territory API
description: The Schier Territory API allows for users to query Schier's territory and representative network with other associated and applicable information.
sidebarDepth: 3
prev: /grease-monkey/other-resources/
---

# Territory API

## Introduction

The Schier Territory API allows for users to query Schier's territory and representative network with other associated and applicable information. This interface provides a few different data types/verticals in which you can access; given your provided key allows you to:

* All current Schier sales territories
* Individual territory
    * By ID (unique to the Territory API)
    * By Zip Code
    * By County and State

## Authentication

Refer to [Basics - Authentication](/basics/#authentication)

## URL Base

All requests made to the Territory will be made to the following base url:

``` http
https://api.schierproducts.com
```

## Base Endpoints

``` http
GET /territories
GET /territory
GET /territory/:id
```

## The Territory Object

This object references a specific sales territory within the Schier Rep Network. Potential information that is included with these responses:

* Name of the territory
* Schier's internal territory code
* The name of the rep firm that represents/manages that territory
* The name and email address of the Schier territory manager
* Names of the  that reside within this territory
* Zip Codes that reside within this territory

```json
{
  "object": "territory",
  "url": "/territory/15",
  "id": "/territory/15",
  "name": null,
  "code": "NCSC",
  "rep_firm": "Schier",
  "population": 15636798,
  "manager": {
    "name": "**** ******",
    "email": null
  },
  "counties": [
    "Abbeville County",
    "Aiken County",
    "Alamance County"
  ],
  "zip_codes": [
    "27006",
    "27007",
    "27009"
  ]
}
```

### Attributes

`name` <span class="code-note">optional, string</span>

The "human-friendly" name of the territory.

`code` <span class="code-note">string</span>

The unique code that identifies this territory and it's resources within the Schier ecosystem.

`rep_firm` <span class="code-note">string</span>

The name of the company that represents this territory.

`population` <span class="code-note">integer</span>

The sum of the populations associated with all the local counties that reside within this territory.

`manager` <span class="code-note">object</span>

The name and email address of the manager for this territory.

`counties` <span class="code-note">array</span>

A list of the counties within this territory.

`zip_codes` <span class="code-note">array</span>

A list of the zip codes (postal codes) that are located within this territory.

## List of Territories

Returns a list of sales territories with their managers.

``` http
GET /territories
```

### Example Response

```json
{
  "object": "list",
  "url": "/territories",
  "data": [
    {
      "object": "territory",
      "url": "/territory/1",
      "id": "/territory/1",
      "name": null,
      "code": "AB N",
      "rep_firm": "Schier",
      "manager": {
        "name": "Eric Thompson",
        "email": null
      }
    },
    {
      "object": "territory",
      "url": "/territory/2",
      "id": "/territory/2",
      "name": null,
      "code": "AB S",
      "rep_firm": "Kern Industries",
      "manager": {
        "name": "Eric Thompson",
        "email": null
      }
    },
    ...
  ]
}
```

## Single Territory

Returns a single territory, the manager, and all counties and zip codes that are located within the territory.

### Methods of Retrieval

There a few different ways that a territory can be retrieved from the API:

* [By ID (unique to the Territory API)](#by-id)
* [By Zip Code](#by-zip-code)
* [By County and State](#by-county-and-state)

#### By ID

The first (by ID) can be done by simply appending the ID-referencing integer to the url like so:

``` http
GET /territory/:id
```

#### By Zip Code

A territory can be requested by appending a url-encoded zip code to the url:

``` http
GET /territory?zip_code=64108
```

#### By Zip Code

A territory can be requested by appending a combined, url-encoded state and county name:

``` http
GET /territory?state=kansas&county=johnson
```

::: tip Note
When inputing the county name, you can either use the full county name or the base; which is the name of the county without the "County" suffix.
:::