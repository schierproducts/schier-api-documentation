---
next: /grease-monkey/other-resources/
---

# Jurisdictions

This object references a jurisdiction within Grease Monkey. You can retrieve a list of jurisdictions within Grease Monkey.

You can also view more detailed information about an individual jurisdiction and all the attributing factors (projects, counties, cities, zip codes).

## Base Endpoints

``` http
GET /api/jurisdictions
GET /api/jurisdictions/:id
```

## The Jurisdiction Object

```json
{
  "object": "jurisdiction",
  "url": "/api/jurisdictions/86",
  "name": "Victoria, TX",
  "created": "08/17/2018",
  "last_updated": "05/28/2020",
  "number_of_projects": 11,
  "plumbing_code": null,
  "indoor": {
    "sizing_method": "ASME",
    "sizing_location_limited": false,
    "flow_rate_to_size_by": "2 Minute",
    "products_to_recommend": [],
    "fixtures_statistics_to_show": []
  },
  "outdoor": {
    "sizing_method": "ASME",
    "flow_rate_to_size_by": "2 Minute",
    "products_to_recommend": [],
    "fixtures_statistics_to_show": [
      "2 Minute"
    ]
  },
  "counties": [
    "Victoria County"
  ],
  "postal_codes": [],
  "states": [
    "Texas"
  ],
  "cities": [
    "Victoria"
  ],
  "contacts": [
    {
      "id": 107,
      "name": "****** *****",
      "first_name": "******",
      "last_name": "*****",
      "title": "Environmental Service & Pretreatment Specialist",
      "email": "*****@******.org",
      "primary_phone_number": "*****",
      "department": "Wastewater/FOG Specific Authority",
      "jurisdictions": [
        "Wastewater/FOG Specific Authority"
      ],
      "jurisdiction_name": "Victoria, TX",
      "facility": {
        "name": "victoria rx public works",
        "address": "1301 Southwest Ben Jordan Street",
        "city": "Victoria",
        "state": "TX",
        "postal_code": "77901",
        "county": null
      },
      "is_primary_contact": false
    }
  ],
  "required_sampling_port": {
    "id": 8,
    "name": "SV10",
    "technical_name": null,
    "store_id": null,
    "model_number": "8065-001-01",
    "product_image": "https://grease-monkey-testing.s3.us-east-2.amazonaws.com/psYk96srqvOz54H4gDGmyB1BJsRuFZMLktYle10T.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3PHCILO3ZS54NWE3%2F20210122%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210122T181630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=a27962ab28a1cecfd37ec00f5d33b9b883f952f9dfe4fa669c954acca66c0c89",
    "product_page_link": "https://www.schierproducts.com/sv10"
  },
  "media": [],
  "fixtures_required_to_bypass": [],
  "fixtures_required_to_connect": [],
  "solids_interceptor_required": "No",
  "other_information": "<p><strong>Pre Treatment Ordinance</strong><br>yes</p>\n<p><strong>Pre Treatment Ordinance Notes</strong><br>Gravity sizing per DFU x 7.5 GPM x 12 min retention...but worked through Schier approvals via GPSM on a number of projects</p>\n<p><strong>Kitchen Fixtures Allowed to Bypass</strong><br>Hand sink</p>\n<p><strong>Types of Interceptors Allowed Indoors</strong><br>Hydromechanical</p>\n<p><strong>Types of Interceptors Allowed Outdoors</strong><br>Hydromechanical, GGI</p>\n<p><strong>Indoor Sizing flow Rate By</strong><br>Fixture Dimensions</p>\n<p><strong>Outdoor Sizing flow Rate By</strong><br>Fixture Dimensions</p>\n<p><strong>Outdoor Sizing Grease Production Size</strong><br>no</p>\n<p><strong>Outdoor sizing Minimum Exterior Size</strong><br>yes</p>\n<p><strong>Outdoor sizing Minimum Exterior Size Value</strong><br>250</p>\n<p><strong>Outdoor sizing Minimum Exterior Size Unit</strong><br>liquid capacity</p>\n<p><strong>Outdoor sizing Minimum Pumpout Ports Required</strong><br>no</p>"
}
```

### Attributes

::: details name <span class="code-note">string</span>
The name of the jurisdiction. Can be a combination of a city and state, county, township, etc.
:::

::: details created <span class="code-note">string</span>
The date of when the jurisdiction was created
:::

::: details last_updated <span class="code-note">string</span>
The date of when the jurisdiction was last updated. This date's timezone is in UTC.
:::

::: details number_of_projects <span class="code-note">integer</span>
The number of projects that have been created within this jurisdiction
:::

::: details plumbing_code <span class="code-note">optional, string</span>
If there is a global plumbing code that this jurisdiction adheres to, it will be described here.
:::

::: details indoor/outdoor <span class="code-note">object</span>
Specifications that the jurisdiction dictates depending on where the interceptor is installed.

```json
{
    "sizing_method": "ASME",
    "flow_rate_to_size_by": "2 Minute",
    "products_to_recommend": [
      "GB-75",
      "GB-250"
    ],
    "fixtures_statistics_to_show": [
      "2 Minute"
    ]
  }
```
:::

::: details counties <span class="code-note">optional, array</span>
A list of counties that reside within this jurisdiction
:::

::: details postal_codes <span class="code-note">optional, array</span>
A list of postal codes that reside within this jurisdiction
:::

::: details states <span class="code-note">optional, array</span>
A list of states that reside within this jurisdiction
:::

::: details cities <span class="code-note">optional, array</span>
A list of cities that reside within this jurisdiction
:::

::: details contacts <span class="code-note">optional, array</span>
A list of contacts that work and/or are responsible for installation decisions within this jurisdiction.

[See Jurisdiction Contacts](/grease-monkey/other-resources/jurisdiction-contacts.html)
:::

::: details required_sampling_port <span class="code-note">optional, object</span>
If this jurisdiction requires a sampling port, this property will provide product details of the approved Schier sampling port.

```json
{
  "id": 8,
  "name": "SV10",
  "technical_name": null,
  "store_id": null,
  "model_number": "8065-001-01",
  "product_image": "https://grease-monkey-testing.s3.us-east-2.amazonaws.com/psYk96srqvOz54H4gDGmyB1BJsRuFZMLktYle10T.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3PHCILO3ZS54NWE3%2F20210122%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210122T181630Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=a27962ab28a1cecfd37ec00f5d33b9b883f952f9dfe4fa669c954acca66c0c89",
  "product_page_link": "https://www.schierproducts.com/sv10"
}
```
:::

::: details media <span class="code-note">optional, array</span>
A list of files and/or links that have been attached to his jurisdiction to help inform sizing/review decisions within this jurisdiction
:::

::: details fixtures_required_to_bypass <span class="code-note">optional, array</span>
A list of kitchen fixtures that this jurisdiction requires to bypass the interceptor
:::

::: details fixtures_required_to_connect <span class="code-note">optional, array</span>
A list of kitchen fixtures that this jurisdiction requires to connect to the interceptor
:::

::: details solids_interceptor_required <span class="code-note">string</span>
A "Yes"/"No" indication if this jurisdiction requires a solids interceptor to be installed in conjunction with the HGI.
:::

::: details other_information <span class="code-note">optional, string</span>
Other HTML-encoded information that may/may not be legacy information from previous versions of Grease Monkey
:::