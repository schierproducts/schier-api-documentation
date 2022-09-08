---
title: GET Kitchen Fixture Types
description: Return a list of available Kitchen Fixtures that can be added to a project.
sidebarDepth: 0
auth: true
---

# GET Kitchen Fixture Types

Return a list of available Kitchen Fixtures that can be added to a Grease Monkey project.

## The Kitchen Fixture Type Object

The Kitchen Fixture Type object provides a combination of label, key, and associated dimensions

```json
{
  "object": "object",
  "name": "2 Compartment Sink",
  "key": "multiCompartmentTwoBowls",
  "typical_dimensions": {
    "unit": "inches",
    "volume": null,
    "lng": 21,
    "width": 21,
    "height": 14
  },
  "allow_custom_flow_rate": false
}
```

### Explanation of Values

| Value                       | Description                                                                                                                                      |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                      | The *human-friendly* name of the kitchen fixture                                                                                                 |
| `key`                       | The enumerated-key used to add this fixture to a project. [See "Type".](/grease-monkey/kitchen-fixtures/create-kitchen-fixture#required-fields)  |
| `typical_dimensions`        | This fixtures, standard typical diminsions. If none are available, this property will have a `null` value                                        |
| `typical_dimensions.unit`   | The unit of measurement used to measure the fixture. Will be **inches** (cubic area) or **gallons** (volume).                                    |
| `typical_dimensions.volume` | The volume in gallons of the fixture. If not available, this will have a `null` value.                                                           |
| `typical_dimensions.lng`    | The length in inches of the fixture. If not available, this will have a `null` value.                                                            |
| `typical_dimensions.width`  | The width in inches of the fixture. If not available, this will have a `null` value.                                                             |
| `typical_dimensions.height` | The height in inches of the fixture. If not available, this will have a `null` value.                                                            |
| `allow_custom_flow_rate`    | Some fixtures that do not have typical dimensions support custom flow rates (GPM). If a custom flow rate is supported, this will be set to `true` |


## Endpoint

``` http
GET /api/kitchen-fixture-types
```

## Sample Response

```json
{
    "object": "list",
    "url": "/api/kitchen-fixture-types",
    "data": [
      {
        "object": "object",
        "name": "2 Compartment Sink",
        "key": "multiCompartmentTwoBowls",
        "typical_dimensions": {
          "unit": "inches",
          "volume": null,
          "lng": 21,
          "width": 21,
          "height": 14
        },
        "allow_custom_flow_rate": false
      },
      {
        "object": "object",
        "name": "3 Compartment Sink",
        "key": "multiCompartmentThreeBowls",
        "typical_dimensions": {
          "unit": "in",
          "volume": null,
          "lng": 21,
          "width": 21,
          "height": 14
        },
        "allow_custom_flow_rate": false
      },
      {
        "object": "object",
        "name": "4 Compartment Sink",
        "key": "multiCompartmentFourBowls",
        "typical_dimensions": {
          "unit": "in",
          "volume": null,
          "lng": 21,
          "width": 21,
          "height": 14
        },
        "allow_custom_flow_rate": false
      },
      {
        "object": "object",
        "name": "Bar Sink One Bowl",
        "key": "barSinkOneBowl",
        "typical_dimensions": {
          "unit": "in",
          "volume": null,
          "lng": 14,
          "width": 14,
          "height": 14
        },
        "allow_custom_flow_rate": false
      },
      {
        "object": "object",
        "name": "Clothes Washer",
        "key": "clothesWasher",
        "typical_dimensions": null,
        "allow_custom_flow_rate": false
      },
      ...
    ]
}
```