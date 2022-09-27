---
title: POST Create Project
description: Create a new Grease Monkey project.
sidebarDepth: 0
auth: true
---

# POST Create a Project

Create a new Grease Monkey project.

## Endpoint

``` http
POST /api/projects
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |


### Required Fields

| Field                   | Type           |
|-------------------------|----------------|
| `name`                  | string         |
| `engineer_id`           | integer        |
| `specification`         | boolean        |
| `address`               | object         |
| `construction_type`     | string (enum)  |
| `installation_location` | string (enum)  |

### Body

**name** | `string` : The name of the project.

**engineer_id** | `integer` : The id of the user that the project will be associated with. In other words: this user will be able to view the project within their Grease Monkey dashboard and will receive all notifications associated with this project.

**specification** | `boolean` : **true** if the project is designated for specification *(will go into plans)* or **false** if the project will be used for estimation purposes.

**address** | `object` : The address associated with this project

---- **street** | `string` : The primary street address of the location.

---- **street_2** | `string`,`null` : If necessary, the suite or building number of the location.

---- **city** | `string` : The city of the specified location.

---- **state** | `string` : The two-letter abbreviation of the project's state/region 

---- **postal_code** | `string` : The location's zip code. *Note: If located in Canada, this zip code will be non-numerical.*

---- **country_code** | `string`,`null` : The two-letter country code of where the project is located. If none is provided, it is assumed it will be `US` *(United States)*.

**construction_type** | `string` : The type of installation for the specified interceptor. This is an enumerated value. See [Construction Types](/grease-monkey/projects/get-construction-types#endpoint) for more information.

**interior_location** | `string`,`null` : If installed indoors, where the interceptor will be located specifically within the structure. This is an enumerated value. See [Interior Locations](/grease-monkey/projects/get-interior-locations#endpoint) for more information.

**installation_location** | `string` : Where will the interceptor be installed; accepted values are `indoors` and `outdoors`

**buried** | `boolean`,`null` : If the installed interceptor will be buried; **defaults to `false`**

**installed_in_traffic_area** | `boolean`,`null` : If buried, will the specified interceptor be placed in a high-traffic area; **defaults to `false`**

**installed_in_high_water_area** | `boolean`,`null` : If buried, will the specified interceptor be placed in an area with a high water table; **defaults to `false`**

**fryer** | `boolean`,`null` : If the sized-location will have a deep-fryer; **defaults to `false`**

**flatware** | `boolean`,`null` : If the sized-location will be using traditional silver that will need to be washed versus discarded; **defaults to `false`**

**food_waste_disposer** | `boolean`,`null` : If the sized-location will have a garbage disposal installed on premises; **defaults to `false`**

**pipe_size** | `integer`,`null` : The size of the pipe that will be connecting to the interceptor. Accepted values are `2`, `3`, `4`, and `6`; **defaults to `4`**

**dont_know_fixtures** | `boolean`,`null` : If the engineer does not know which fixtures will be used, set to `true` to size by pipe size; **defaults to `false`**

**capacity_method** | `string` : The mathematical method on how grease capacity will be calculated; accepted values are `numberOfMeals`, `numberOfSeats` and `numberOfSquareFootage`. The value provided here will dictate which accompanying values will be necessary to complete the calculation.

**number_of_meals** | `integer`,`null` : The approximate number of meals that will be served within this FSE on any given day. **REQUIRED if `capacity_method` is set to `numberOfMeals`**

**number_of_seats** | `integer`,`null` : The approximate number of seats located within FSE. **REQUIRED if `capacity_method` is set to `numberOfSeats`**

**square_footage** | `integer`,`null` : The approximate number of square footage that the FSE occupies. **REQUIRED if `capacity_method` is set to `numberOfSquareFootage`**

**pre_approval_notes** | `string`,`null` : Any additional information that may be provided to Regulatory Specialists to aid them in reviewing this project.

**due_at** | `string`,`null` : If desired, the date that this project needs to be reviewed and checked out by the Regulatory Compliance Specialists. **Required format: MM/DD/YYYY**

### Sample Request

#### URL

```bash
https://app.greasemonkeysizing.com/api/projects
```

#### Body

```json
{
  "name": "Raising Canes #664",
  "engineer_id": 6578,
  "specification": true,
  "address": {
    "street": "12345 Main Street",
    "street_2": "Suite 100",
    "city": "Shawnee",
    "state": "KS",
    "postal_code": "66218"
  },
  "construction_type": "newConstruction",
  "installation_location": "outdoors",
  "buried": true,
  "pipe_size": 4,
  "capacity_method": "numberOfSeats",
  "number_of_seats": 120
}
```

### Sample Response

Upon a successful creation of a project, a new instance of the [Project Object](/grease-monkey/projects#the-project-object) will be returned with an **HTTP status code of 201**.

```json
{
  "object": "project",
  "url": "/api/projects/1645",
  "id": 1645,
  "name": "Raising Canes #664",
  "status": "Draft",
  "status_value": "draft",
  "specification": true,
  "created": "09/07/2022",
  "submitted": null,
  "approved": null,
  "due": null,
  "engineer": {
    "id": 6578,
    "name": "Starrlene Parish",
    "email": "starrlene.parish@schierproducts",
    "phone_number": null
  },
  "address": {
    "street": "12345 Main Street",
    "street_2": "Suite 100",
    "city": "Shawnee",
    "state": "KS",
    "postal_code": "66218"
  },
  "jurisdiction": null,
  "unique_local_requirements": false,
  "pump_out_cycle": 90,
  "construction_type": "New Construction",
  "construction_type_value": "newConstruction",
  "installation_location": "Outdoors",
  "installation_location_value": "outdoors",
  "inside_trap_location": null,
  "installed_in_traffic_area": false,
  "installed_in_high_water_area": false,
  "buried": true,
  "fryer": false,
  "flatware": false,
  "pipe_size": {
    "value": 4,
    "unit": "in",
    "object": "measurement"
  },
  "food_waste_disposer": false,
  "servings_per_day": 0,
  "recommended_product": "GB2",
  "flow_rate": {
    "pipe": {
      "value": 75,
      "unit": "GPM",
      "object": "measurement"
    },
    "two_minute": {
      "value": 75,
      "unit": "GPM",
      "object": "measurement"
    },
    "one_minute": {
      "value": 150,
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
    "capacity_method": {
      "name": "Number of Seats",
      "key": "numberOfSeats",
      "value": 120
    }
  },
  "fixtures": {
    "object": "list",
    "url": "/api/projects/1645/kitchen-fixtures",
    "data": []
  },
  "valid": false,
  "invalid_values": [
    "dont_know_fixtures",
    "fixtures"
  ]
}
```

## Responses

### 201 <Badge text="created" type="success" />

A new instance of the Project Object has been created.

### 400 <Badge text="error" type="error" />

The request is not valid.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Bad Request",
      "status": 400,
      "detail": "The engineer ID is not valid."
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

### 422 <Badge text="error" type="error" />

The request is rejected because a property is not valid or the required properties were not provided.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Request Not Valid",
      "status": 422,
      "detail": "Please provide a valid installation location."
    },
    {
      "type": "error",
      "title": "Request Not Valid",
      "status": 422,
      "detail": "Please provide a valid two-letter state code"
    }
  ]
}
```
