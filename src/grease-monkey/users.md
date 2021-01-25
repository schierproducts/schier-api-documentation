---
title: Users
---

# Users

This object references a user within Grease Monkey. You can retrieve a list of users and their number of created projects within Grease Monkey.

You can also view more information about an individual user and all of their respective projects and their associated details.

### Base Endpoints

```url
GET /api/users
GET /api/users/:id
```

### Base User Object

When retrieve a list of users, the amount of meta that is returned via the API is limited to help reduce latency and potential memory issues that may happen when consuming large objects

```json
{
  "object": "user",
  "url": "/api/users/2838",
  "grease_monkey_user": true,
  "name": "M A",
  "email": "mma76@miami.edu",
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

### Parameters

#### zip_codes <span class="code-note">optional, array or string</span>

Users filtered by their specified zip code in their profile. This parameter can be either a single zip code (as a string):

```bash
/api/users?zip_codes=64108
```

or an array of zip codes:

```bash
/api/users?zip_codes[]=64108&zip_codes[]=66061
```

#### types <span class="code-note">optional, array or string</span>

Users filtered by their specified user type. This parameter can be either a single zip code (as a string):

```bash
/api/users?types=64108
```

or an array of zip codes:

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
      "name": "Jonathon Bock",
      "email": "jon.bock@dialecticeng.com",
      "phone_number": "816-997-9638",
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