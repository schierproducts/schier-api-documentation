---
title: Users
description: This object references a user within Grease Monkey.
---

# Users

This object references a user within Grease Monkey. You can retrieve a list of users and their number of created projects within Grease Monkey.

You can also view more information about an individual user and all of their respective projects and their associated details.

## Base Endpoints

```url
GET /api/users
GET /api/users/:id
```

## The User Object

When retrieve a list of users, the amount of meta that is returned via the API is limited to help reduce latency and potential memory issues that may happen when consuming large objects.

```json
{
  "object": "user",
  "url": "/api/users/2838",
  "grease_monkey_user": true,
  "name": "M A",
  "email": "****@miami.edu",
  "phone_number": null,
  "position": null,
  "company": null,
  "postal_code": "33143",
  "type": null,
  "registered": "10/13/2019",
  "number_of_projects": 1
}
```

### Attributes

`type` <span class="code-note">optional, string</span>

The type of user that either Schier or they themselves have identified with. The available options are:

* Engineer / Architect
* Contractor
* Distributor
* AHJ / Inspector
* Facility Owner
* Manufacturer Rep
* Other
* Schier Employee

`number_of_projects` <span class="code-note">default: 0, integer</span>

The number of projects that the user has created within Grease Monkey

## List of Users

Returns a list of users from Grease Monkey with some personal information and the number of projects that they have created.

```bash
GET /api/users
```

### Parameters

#### zip_codes

<span class="code-note block">optional, array or string</span>

Users filtered by their specified zip code in their profile. This parameter can be either a single zip code (as a string):

```bash
/api/users?zip_codes=64108
```

or an array of zip codes:

```bash
/api/users?zip_codes[]=64108&zip_codes[]=66061
```

#### types

<span class="code-note block">optional, array or string</span>

Users filtered by their specified user type. This parameter can be either a single type (as a string):

```bash
/api/users?types=distributor
```

or an array of types:

```bash
/api/users?types[]=distributor&types[]=engineerArchitect
```

### Other Parameters

`limit` <span class="code-note">optional, default: 25</span>

`offset` <span class="code-note">optional, default: 0</span>

### Example Response

```json
{
  "object": "list",
  "url": "/api/users?limit=100&types=engineerArchitect&zip_codes=64108",
  "data": [
    {
      "object": "user",
      "url": "/api/users/1678?limit=100&types=engineerArchitect&zip_codes=64108",
      "grease_monkey_user": true,
      "name": "Jonathon ****",
      "email": "****@dialecticeng.com",
      "phone_number": "*****",
      "position": "Plumbing Designer",
      "company": "Dialectic Engineering",
      "postal_code": "64108",
      "type": "Engineer / Architect",
      "registered": "01/08/2019",
      "number_of_projects": 4
    },
    {
      "object": "user",
      "url": "/api/users/3785?limit=100&types=engineerArchitect&zip_codes=64108",
      "grease_monkey_user": true,
      "name": "Bruce ***",
      "email": "****@imegcorp.com",
      "phone_number": "*****",
      "position": null,
      "company": null,
      "postal_code": "64108",
      "type": "Engineer / Architect",
      "registered": "09/25/2020",
      "number_of_projects": 1
    },
    {
      "object": "user",
      "url": "/api/users/584?limit=100&types=engineerArchitect&zip_codes=64108",
      "grease_monkey_user": true,
      "name": "aaron ****",
      "email": "*****@dialecticeng.com",
      "phone_number": "******",
      "position": null,
      "company": null,
      "postal_code": "64108",
      "type": "Engineer / Architect",
      "registered": "05/08/2018",
      "number_of_projects": 20
    },
  ...
}
```

## User

Returns an individual user identified by ID 

```bash
GET /api/users/:id
```

### Parameters

#### projects 

<span class="code-note block">optional, boolean</span>

If you would like to include the user's projects ([view the Project object](./projects.html#base-project-object)) as part of the result, include this parameter.

```bash
/api/users/60?projects=true
```

::: tip Note
This defaults to false because of the large amount of information that is included with this response.
:::

##### Example Response

```json
{
  "object": "user",
  "url": "/api/users/60?projects=true",
  "grease_monkey_user": true,
  "name": "*****",
  "email": "*****@schierproducts.com",
  "phone_number": "*****",
  "position": "TM",
  "company": "Schier",
  "postal_code": "66223",
  "type": "Schier Employee",
  "registered": "02/13/2018",
  "number_of_projects": 327,
  "projects": {
    "object": "list",
    "url": "/api/projects",
    "data": [
      {
        "object": "project",
        "url": "/api/projects/76",
        "id": 76,
        "name": "Pizza Hut",
        "status": "Closed",
        "created": "02/13/2018",
        "submitted": "02/13/2018",
        "approved": null,
        "engineer": {
          "name": "Paul *****",
          "email": "*****@schierproducts.com",
          "phone_number": "*****"
        },
        "address": {
          "street": null,
          "street_2": null,
          "city": null,
          "state": null,
          "postal_code": null
        },
        "jurisdiction": {
          "name": "Richmond, VA",
          "plumbing_code": null,
          "sizing_methods": {
            "indoor": "asme-pdi-preset",
            "outdoor": "asme-pdi-preset"
          },
          "contacts": [
            {
              "id": 962,
              "name": "Rick *****",
              "first_name": "Rick",
              "last_name": "*****",
              "title": "Plumbing Plans Review",
              "email": "*****@richmondgov.com",
              "primary_phone_number": "*****",
              "department": "Plumbing Plans Review",
              "jurisdictions": [
                "Plumbing Plans Review"
              ],
              "jurisdiction_name": "Richmond, VA",
              "facility": {
                "name": "City of Richmond VA Building Dept.",
                "address": "900 East Broad Street",
                "city": "Richmond",
                "state": "VA",
                "postal_code": "23219",
                "county": null
              }
            }
          ]
        },
        "pump_out_cycle": 90,
        "construction_type": "New Construction",
        "installation_location": "Indoors",
        "inside_trap_location": "otherLocation",
        "installed_in_traffic_area": false,
        "installed_in_high_water_area": false,
        "buried": false,
        "fryer": false,
        "flatware": false,
        "pipe_size": 4,
        "food_waste_disposer": false,
        "servings_per_day": 0,
        "recommended_product": "GB-75",
        "flow_rate": {
          "pipe": {
            "value": 75,
            "unit": "GPM",
            "object": "measurement"
          },
          "two_minute": {
            "value": 0,
            "unit": "GPM",
            "object": "measurement"
          },
          "one_minute": {
            "value": 0,
            "unit": "GPM",
            "object": "measurement"
          },
          "sized_by": {
            "value": 75,
            "unit": "GPM",
            "object": "measurement"
          },
          "dfu": 0
        },
        "grease": {
          "per_serving": {
            "weight": {
              "value": 0.04,
              "unit": "lbs",
              "object": "measurement"
            },
            "volume": {
              "value": 0,
              "unit": "gal",
              "object": "measurement"
            },
            "object": "grease-capacity-measurement"
          },
          "per_day": {
            "weight": {
              "value": 5.25,
              "unit": "lbs",
              "object": "measurement"
            },
            "volume": {
              "value": 0.72,
              "unit": "gal",
              "object": "measurement"
            },
            "object": "grease-capacity-measurement"
          },
          "per_30_days": {
            "weight": {
              "value": 157.5,
              "unit": "lbs",
              "object": "measurement"
            },
            "volume": {
              "value": 21.58,
              "unit": "gal",
              "object": "measurement"
            },
            "object": "grease-capacity-measurement"
          },
          "per_60_days": {
            "weight": {
              "value": 315,
              "unit": "lbs",
              "object": "measurement"
            },
            "volume": {
              "value": 43.15,
              "unit": "gal",
              "object": "measurement"
            },
            "object": "grease-capacity-measurement"
          },
          "per_90_days": {
            "weight": {
              "value": 472.5,
              "unit": "lbs",
              "object": "measurement"
            },
            "volume": {
              "value": 64.73,
              "unit": "gal",
              "object": "measurement"
            },
            "object": "grease-capacity-measurement"
          }
        },
        "unique_local_requirements": false,
        "spaces": []
      }
    ]
  }
}
```

#### contacts

<span class="code-note block">optional, boolean</span>

When a project is linked to a jurisdiction *(or AHJ)*, a `jurisdiction` JSON object is appended to the project response. Further more, there can be a list of contacts available for that jurisdiction. **By default,** contacts will not be added to the response unless the `contacts=true` parameter is added.

::: tip Note
This defaults to false because of the large amount of information that is included with this response.
:::

```bash
/api/users/60?contacts=true
```

Also [see Jurisdiction Contacts](/grease-monkey/other-resources/jurisdiction-contacts.html)

### Other Parameters

The pagination parameters used with the listing request can also be used here due to the large amount of projects that a specific individual user can have.

`limit` <span class="code-note">optional, default: 25</span>

`offset` <span class="code-note">optional, default: 0</span>