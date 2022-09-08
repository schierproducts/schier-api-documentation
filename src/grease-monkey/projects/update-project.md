---
title: PUT Update Project
description: Update an existing Grease Monkey project.
sidebarDepth: 0
---

# PUT Update Project

Update an existing Grease Monkey project.

## Endpoint

``` http
PUT /api/projects/6578
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |

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

**installation_location** | `string` : Where will the interceptor be installed; accepted values are `indoors` and `outdoors`

**buried** | `boolean` : If the installed interceptor will be buried.

**installed_in_traffic_area** | `boolean` : If buried, will the specified interceptor be placed in a high-traffic area.

**installed_in_high_water_area** | `boolean` : If buried, will the specified interceptor be placed in an area with a high water table.

**fryer** | `boolean` : If the sized-location will have a deep-fryer.

**flatware** | `boolean` : If the sized-location will be using traditional silver that will need to be washed versus discarded.

**food_waste_disposer** | `boolean` : If the sized-location will have a garbage disposal installed on premises.

**pipe_size** | `integer` : The size of the pipe that will be connecting to the interceptor. Accepted values are `2`, `3`, `4`, and `6`.

**dont_know_fixtures** | `boolean` : If the engineer does not know which fixtures will be used, set to `true` to size by pipe size.

**capacity_method** | `string` : The mathematical method on how grease capacity will be calculated; accepted values are `numberOfMeals`, `numberOfSeats` and `numberOfSquareFootage`. The value provided here will dictate which accompanying values will be necessary to complete the calculation.

**number_of_meals** | `integer`,`null` : The approximate number of meals that will be served within this FSE on any given day. **REQUIRED if `capacity_method` is set to `numberOfMeals`**

**number_of_seats** | `integer`,`null` : The approximate number of seats located within FSE. **REQUIRED if `capacity_method` is set to `numberOfSeats`**

**square_footage** | `integer`,`null` : The approximate number of square footage that the FSE occupies. **REQUIRED if `capacity_method` is set to `numberOfSquareFootage`**

**pre_approval_notes** | `string`,`null` : Any additional information that may be provided to Regulatory Specialists to aid them in reviewing this project.

**due_at** | `string`,`null` : If desired, the date that this project needs to be reviewed and checked out by the Regulatory Compliance Specialists. **Required format: MM/DD/YYYY**

#### Local Requirements inputs

If the project that you are trying to update resides within a jurisdiction that requires special pieces of information that "normal" projects don't require, you will be notified of the necessary inputs to make the project valid in the [project response](/grease-monkey/projects/create-project#sample-response) when the project is created via the `invalid_values` property. See below for information regarding these special properties.

**number_of_indoor_seats** | `integer`,`null` : The number of seats for the FSE that are located indoors.

**number_of_outdoor_seats** | `integer`,`null` : The number of seats for the FSE that are located outdoors.

**number_of_bar_seats** | `integer`,`null` : The number of seats for the FSE that are located within a designated bar area.

**number_of_take_out_meals** | `integer`,`null` : On average, the number of take out meals that will be served/delivered per day.

**food_service_at_bar** | `boolean` : If the FSE does have a designated bar area, will food be served in the bar area.

### Sample Request

#### URL

```bash
https://app.greasemonkeysizing.com/api/projects/6578
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

Upon a successful creation of a project, a new instance of the [Project Object](/grease-monkey/projects#the-project-object) will be returned with an **HTTP status code of 200**.

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

### 200 <Badge text="created" type="success" />

The project has been successfully updated with the provided information.

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

The request has not permitted based on logic or user access.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Authorized",
      "status": 403,
      "detail": "The project cannot be updated because it is in a closed state."
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
