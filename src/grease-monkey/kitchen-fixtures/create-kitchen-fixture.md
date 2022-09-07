---
title: POST Create Kitchen Fixture
description: Create a new kitchen fixture that is associated with a project.
sidebarDepth: 0
---

# POST Create a Kitchen Fixture

Create a new kitchen fixture that is associated with a project.

## Endpoint

``` http
POST /api/projects/:id/kitchen-fixtures
```

## Request

### Headers

| Header          | Parameter           | Description                       |
|-----------------|---------------------|-----------------------------------|
| `Authorization` | `Bearer: <API_KEY>` | The key used to access the API.   |


### Required Fields

| Field                | Type          |
|----------------------|---------------|
| `name`               | string        |
| `type`               | string (enum) |
| `amount`             | integer       |
| `typical_dimensions` | boolean       |

::: tip Note
Some kitchen fixtures are measured by the liquid volume versus their cubic area. The types listed below indicate how they are measured. The API will throw an error if the incorrect values are supplied if you decide to *not use* the typical dimensions.
:::

### Body

**name** | `string` : The name of the fixture.

**type** | `string` : The key/name of the type of fixture that is being defined. [See "GET Kitchen Fixture Types".](/grease-monkey/kitchen-fixtures/get-kitchen-fixture-types)

**amount** | `integer` : The number of the defined fixtures will be added to the project.

**typical_dimensions** | `boolean` : Each fixture has a standard/universal set of dimensions. Set to **true** if you would like to use these dimensions.

**dimensions** | `object` : A list of dimensions used to define the size of the fixture.

---- **lng** | `integer`,`null` : The length of the fixture bowl/reservoir *(required if typical_dimensions is **false**)*

---- **width** | `integer`,`null` : The length of the fixture bowl/reservoir *(required if typical_dimensions is **false**)*

---- **height** | `integer`,`null` : The height of the fixture bowl/reservoir *(required if typical_dimensions is **false**)*

---- **volume** | `integer`,`null` : The height of the fixture bowl/reservoir *(required if typical_dimensions is **false**)*

**custom_flow_rate** | `integer`,`null` : Some fixtures allow for the designation of a custom flow rate. If a custom flow rate is supplied to a kitchen fixture that does not support this information, it will simply be ignored.

### Sample Request

#### URL

```bash
https://app.greasemonkeysizing.com/api/projects/1435/kitchen-fixtures
```

#### Body

```json
{
  "name": "Chicken Station",
  "type": "dumpSink",
  "amount": 1,
  "typical_dimensions": false,
  "dimensions": {
    "lng": 14,
    "width": 14,
    "height": 16
  }
}
```

### Sample Response

Upon a successful creation/addition of a kitchen fixture, a new instance of the [Kitchen Fixture Object](/grease-monkey/kitchen-fixtures#the-kitchen-fixture-object) will be returned with an **HTTP status code of 201**.

```json
{
  "object": "kitchen-fixture",
  "url": "/api/kitchen-fixtures/1366",
  "id": 1366,
  "name": "Chicken Station",
  "type": "Dump Sink",
  "uses_typical_dimensions": false,
  "dimensions": {
    "object": "dimension-set",
    "standard": {
      "object": "dimensions",
      "length": {
        "value": 21,
        "unit": "in",
        "object": "measurement"
      },
      "width": {
        "value": 21,
        "unit": "in",
        "object": "measurement"
      },
      "height": {
        "value": 14,
        "unit": "in",
        "object": "measurement"
      },
      "volume": {
        "value": 6174,
        "unit": "sq in",
        "object": "measurement"
      },
      "capacity": {
        "value": 80,
        "unit": "gal",
        "object": "measurement"
      }
    },
    "metric": {
      "object": "dimensions",
      "length": {
        "value": 53.3,
        "unit": "cm",
        "object": "measurement"
      },
      "width": {
        "value": 53.3,
        "unit": "cm",
        "object": "measurement"
      },
      "height": {
        "value": 35.6,
        "unit": "cm",
        "object": "measurement"
      },
      "volume": {
        "value": 15682,
        "unit": "sq cm",
        "object": "measurement"
      },
      "capacity": {
        "value": 302.8,
        "unit": "L",
        "object": "measurement"
      }
    }
  },
  "flow_rate": {
    "one_minute": {
      "standard": {
        "value": 60,
        "unit": "GPM",
        "object": "measurement"
      },
      "metric": {
        "value": 3.8,
        "unit": "L/s",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "two_minute": {
      "standard": {
        "value": 30,
        "unit": "GPM",
        "object": "measurement"
      },
      "metric": {
        "value": 1.9,
        "unit": "L/s",
        "object": "measurement"
      },
      "object": "dimension-set"
    },
    "dfu": 6
  }
}
```

## Responses

### 201 <Badge text="created" type="success" />

A new instance of the Kitchen Fixture Object has been created.

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
      "detail": "The project that this fixture is being added to is in a closed state."
    }
  ]
}
```

### 404 <Badge text="error" type="error" />

The project that the new fixture will be applied to does not exist.

```json
{
  "object": "error-list",
  "errors": [
    {
      "type": "error",
      "title": "Not Found",
      "status": 404,
      "detail": "The requested project identified by 1234 could not be found."
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
      "detail": "The fixture's width must be an integer."
    }
  ]
}
```
