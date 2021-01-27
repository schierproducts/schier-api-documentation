---
title: Projects
description: References a project within Grease Monkey.
sidebarDepth: 3
---

# Projects

This object references a project *(or sizing)* within Grease Monkey. You can retrieve a list of projects within Grease Monkey.

You can also view more detailed information about an individual project and all the attributing factors (kitchen fixtures, spaces, etc).

## Base Endpoints

```url
GET /api/projects
GET /api/projects/:id
```

## The Project Object

When retrieve a list of objects, the amount of meta that is returned via the API is limited to help reduce latency and potential memory issues that may happen when consuming large objects.

```json
{
  "object": "project",
  "url": "/api/projects/1645",
  "id": 1645,
  "name": "Soluna *****",
  "status": "Draft",
  "created": "06/11/2018",
  "submitted": "06/11/2018",
  "approved": null,
  "engineer": {
    "name": "Lance *****",
    "email": "*****@gmail.com",
    "phone_number": null
  },
  "address": {
    "street": "*****, Suite 200",
    "street_2": null,
    "city": "Columbus",
    "state": "OH",
    "postal_code": "43215"
  },
  "jurisdiction": null,
  "pump_out_cycle": 90,
  "construction_type": "Remodel / Tenant Finish",
  "installation_location": "Indoors",
  "inside_trap_location": "kitchen",
  "installed_in_traffic_area": false,
  "installed_in_high_water_area": false,
  "buried": false,
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
      "value": 68.86,
      "unit": "GPM",
      "object": "measurement"
    },
    "one_minute": {
      "value": 137.72,
      "unit": "GPM",
      "object": "measurement"
    },
    "sized_by": {
      "value": 68.86,
      "unit": "GPM",
      "object": "measurement"
    },
    "dfu": 40
  },
  "grease": {
    "per_serving": {
      "weight": {
        "value": 0.05,
        "unit": "lbs",
        "object": "measurement"
      },
      "volume": {
        "value": 0.01,
        "unit": "gal",
        "object": "measurement"
      },
      "object": "grease-capacity-measurement"
    },
    "per_day": {
      "weight": {
        "value": 18.2,
        "unit": "lbs",
        "object": "measurement"
      },
      "volume": {
        "value": 2.49,
        "unit": "gal",
        "object": "measurement"
      },
      "object": "grease-capacity-measurement"
    },
    "per_30_days": {
      "weight": {
        "value": 546,
        "unit": "lbs",
        "object": "measurement"
      },
      "volume": {
        "value": 74.79,
        "unit": "gal",
        "object": "measurement"
      },
      "object": "grease-capacity-measurement"
    },
    "per_60_days": {
      "weight": {
        "value": 1092,
        "unit": "lbs",
        "object": "measurement"
      },
      "volume": {
        "value": 149.59,
        "unit": "gal",
        "object": "measurement"
      },
      "object": "grease-capacity-measurement"
    },
    "per_90_days": {
      "weight": {
        "value": 1638,
        "unit": "lbs",
        "object": "measurement"
      },
      "volume": {
        "value": 224.38,
        "unit": "gal",
        "object": "measurement"
      },
      "object": "grease-capacity-measurement"
    }
  },
  "fixtures": {
    "object": "list",
    "url": "/api/projects/1645",
    "data": [
      {
        "name": "3 comp sink",
        "type": "3 Compartment Sink",
        "uses_typical_dimensions": true,
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
              "unit": "L\/s",
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
              "unit": "L\/s",
              "object": "measurement"
            },
            "object": "dimension-set"
          },
          "dfu": 6
        }
      }
    ]
  },
  "unique_local_requirements": false
}
```

### Attributes

::: details name <span class="code-note">string</span> 
The name of the project entered by the user
:::

::: details status <span class="code-note">string</span>
The process point that the project currently resides in. Possible values are:

* **Draft** - The project is still being worked on
* **Submitted** - The project has been submitted for PreApproval, but has not been received by a Schier Admin 
* **Pending** - The project has been submitted for PreApproval, and is currently being revied by a Schier Admin
* **Closed** - The project has been closed either by the user or by a Schier Admin. The project is no longer being reviewed.
* **Closed/Approved** - The project has been closed by a Schier Admin, and a project of that nature is now approved by the jurisdiction in which the project resides.
:::
  
::: details created <span class="code-note">string</span>
The date of when the project was created
:::

::: details submitted <span class="code-note">optional, string</span>
If available, the date of when the project was submitted for the pre-approval process
:::

::: details engineer <span class="code-note">object</span>
Some information regarding the engineer (user) that created the project

```json
{
    "name": "Lance *****",
    "email": "*****@gmail.com",
    "phone_number": null
}
```
:::

::: details address <span class="code-note">object</span>
Location information for this project. If the user *did NOT* request PreApproval for this project, this information may be limited as it is not required.

```json
{
  "street": "*****, Suite 200",
  "street_2": null,
  "city": "Columbus",
  "state": "OH",
  "postal_code": "43215"
}
```
:::

::: details jurisdiction <span class="code-note">optional, object</span>
Specific information regarding the jurisdiction in which this project is located.

```json
{
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
}
```
:::

::: details pump_out_cycle <span class="code-note">integer</span>
The recommended number of days between pump out
:::

::: details construction_type <span class="code-note">string</span>
Type of building that the project is being sized for
:::

::: details installation_location <span class="code-note">string</span>
If the resulting interceptor is being installed indoors or outdoors
:::

::: details inside_trap_location <span class="code-note">optional, string</span>
If the resulting interceptor is going to be installed indoors, where specifically. Different options may be available depending on the project's jurisdiction. 
:::

::: details installed_in_traffic_area <span class="code-note">boolean</span>
Indicating if the interceptor will be installed in a high traffic area, like a parking lot, where a high-durability cover will be required
:::

::: details installed_in_high_water_area <span class="code-note">boolean</span>
Indicating if the interceptor will be installed in an area with a high water table (flood plain)
:::

::: details buried <span class="code-note">boolean</span>
Indicating if the interceptor will be below grade
:::

::: details fryer <span class="code-note">boolean</span>
Does the location have a deep-fryer on premises.
:::

::: details flatware <span class="code-note">boolean</span>
Does the location utilize silverware; and not disposable utensils.
:::

::: details pipe_size <span class="code-note">object</span>
The diameter of the inlet/outlet pipe leading to the interceptor. The default is `4`.

```json
{
    "value": 4,
    "unit": "in",
    "object": "measurement"
}
```
:::

::: details food_waste_disposer <span class="code-note">boolean</span>
Does the location contain a solid food waster disposer (garbage disposer)
:::

::: details servings_per_day <span class="code-note">integer</span>
The average number of meals/servings that the location will provide to consumers 
:::

::: details recommended_product <span class="code-note">optional, string</span>
The name of the recommended Schier product determined by the information provided by the user.
:::

::: details flow_rate <span class="code-note">object</span>
The calculated flow rate values determined by the information provided by the user.

#### Property Description

* `pipe` - The flow rate (GPM) based on the diameter of the inlet/outlet pipe.
* `two_minute` - The amount of flow that is produced by the kitchen fixtures over **a two-minute period**.
* `one_minute` - The amount of flow that is produced by the kitchen fixtures over **a one-minute period**.
* `sized_by` - The value by which the recommended product was determined. Normally, this number is the lower of the non-zero pipe/two_minute values. This can change depending on the jurisdiction's local requirements. 
* `dfu` - The number of DFU's produced by the location's kitchen fixtures.

```json
{
    "pipe": {
      "value": 75,
      "unit": "GPM",
      "object": "measurement"
    },
    "two_minute": {
      "value": 68.86,
      "unit": "GPM",
      "object": "measurement"
    },
    "one_minute": {
      "value": 137.72,
      "unit": "GPM",
      "object": "measurement"
    },
    "sized_by": {
      "value": 68.86,
      "unit": "GPM",
      "object": "measurement"
    },
    "dfu": 40
}
```
:::

::: details grease <span class="code-note">object</span>
The amount of grease that is generated on an interval/segmented basis. The result of these values is based on a variety of factors (menu type, kitchen fixtures, number of servings) and drastically change if these values are manipulated.

These values are provided in both pounds and gallons.

#### Property Description

* `per_serving` - The amount of grease produced by each serving/meal
* `per_day` - The amount of grease produced each day
* `per_30_days` - The amount of grease produced over a 30-day period
* `per_60_days` - The amount of grease produced over a 60-day period
* `per_90_days` - The amount of grease produced over a 90-day period
:::

::: details fixtures <span class="code-note">object</span>
A list of kitchen fixtures used to size this project.

[See Kitchen Fixtures](/grease-monkey/other-resources/kitchen-fixtures.html)
:::

::: details unique_local_requirements <span class="code-note">boolean</span>
If the jurisdiction in which the project resides has unique requirements; prevening Grease Monkey from accurately recommending a product.
:::

## List of Projects

Returns a list of projects from Grease Monkey with related engineer and jurisdiction information.

```bash
GET /api/projects
```

### Parameters

#### zip_codes

<span class="code-note block">optional, array or string</span>

Projects filtered by the zip code provided in the location's address. This parameter can be either a single zip code (as a string):

```bash
/api/projects?zip_codes=64108
```

or an array of zip codes:

```bash
/api/projects?zip_codes[]=64108&zip_codes[]=66061
```

#### types

<span class="code-note block">optional, array or string</span>

Projects filtered by their specified construction type. This parameter can be either a single type (as a string):

```bash
/api/projects?types=newConstruction
```

or an array of types:

```bash
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

## Project

Returns an individual project identified by ID

```bash
GET /api/projects/:id
```

### Parameters

#### notes

<span class="code-note block">optional, boolean</span>

If you would like to include the project's Schier Admin-generated notes.

[Also see Notes](/grease-monkey/other-resources/notes.html)

```bash
/api/projects/1320?notes=true
```

::: tip Note
This defaults to false because of the large amount of information that can be included with this response.
:::

#### accessories

<span class="code-note block">optional, boolean</span>

If you would like to include the list of recommended, compatible accessories for this project. 

```bash
/api/projects/1320?accessories=true
```

[Also see Product Accessories](/grease-monkey/other-resources/product-accessories.html)

::: tip Note
This defaults to false because of the large amount of information that can be included with this response.
:::

#### fixtures

<span class="code-note block">optional, boolean</span>

If you would like to include the list of kitchen fixtures and their detailed information.

Also [see Kitchen Fixtures](/grease-monkey/other-resources/kitchen-fixtures.html).

```bash
/api/projects/1320?fixtures=true
```

::: warning Notice
Due to the highly-verbose nature of this information, requesting this information is cautioned; especially with high-latency network connections.
:::