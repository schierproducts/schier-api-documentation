---
title: Users
---

# Users

This object references a user within Grease Monkey. You can retrieve a list of users and their number of created projects within Grease Monkey.

You can also view more information about an individual user and all of their respective projects and their associated details.

### Base Endpoint

```url
/api/users
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

## List of Users

