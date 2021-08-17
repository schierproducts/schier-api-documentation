---
description: Product types are, in essence, a type of category system that Schier's products are grouped into.
---

# Product Types

Product types are, in essence, a type of category system that Schier's products are grouped into. These product types dictate the features/jobs that they perform and how they fit into the Schier product family.

## Base Endpoints

```http
GET /product-types
GET /product-types/:type
GET /product-types/:type/products
```

## The Product Type Object

```json
{
  "object": "product-type",
  "url": "/product-types/hydromechanical_grease_interceptor",
  "name": "Hydromechanical Grease Interceptor",
  "key": "hydromechanical_grease_interceptor",
  "active": true,
  "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
  "created": "11/24/2020",
  "last_updated": null,
  "parent": null,
  "types": []
}
```

### Attributes

`name` <span class="code-note">string</span>

The name of the product type.

`key` <span class="code-note">string</span>

The product type's key, *or slug*, that is unique to each product type. This can also be used to retrieve an individual product and its associated products.

`active` <span class="code-note">boolean</span>

If this product type is in a "published" state; meaning that it can be queried.

`image` <span class="code-note">string</span>

An image thumbnail to provide a sample image of what this product type looks like. This is optional, so a fallback image may be provided.

`created` <span class="code-note">string</span>

A timestamp of when the product type was created

`last_updated` <span class="code-note">optional, string</span>

If the product type was updated since it's creation, a timestamp of when that occurred

`parent` <span class="code-note">optional, object</span>

Product types can have parent product types. For example, a sampling port is a product type, but is also an accessory product.

`types` <span class="code-note">optional, array</span>

If the product type is parent, any sub (child) product types will be populated as an array. 

`products` <span class="code-note">optional, object</span>

A list of products that belong to this product type.

## List of Product Types

Returns all of Schier's available product types and their associated parents/children.

``` http
GET /product-types
```

### Example Response

```json
{
  "object": "list",
  "url": "/product-types",
  "data": [
    {
      "object": "product-type",
      "url": "/product-types/hydromechanical_grease_interceptor",
      "name": "Hydromechanical Grease Interceptor",
      "key": "hydromechanical_grease_interceptor",
      "active": true,
      "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
      "created": "11/24/2020",
      "last_updated": null,
      "parent": null,
      "types": []
    },
    {
      "object": "product-type",
      "url": "/product-types/anchor_kit",
      "name": "Anchor Kit",
      "key": "anchor_kit",
      "active": true,
      "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
      "created": "11/24/2020",
      "last_updated": null,
      "parent": {
        "object": "product-type",
        "url": "/product-types/accessory",
        "name": "Accessory",
        "key": "accessory",
        "active": true,
        "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
        "created": "11/24/2020",
        "last_updated": null
      },
      "types": [
        {
          "object": "product-type",
          "url": "/product-types/accessory",
          "name": "Accessory",
          "key": "accessory",
          "active": true,
          "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
          "created": "11/24/2020",
          "last_updated": null
        }
      ]
    }
  ]
}
```

## Product Type by Key

Returns an individual product type by the type key ([see object attributes](#attributes))

``` http
GET /product-types/sampling_port
```

So in this example, the `sampling_port` segment of the URL is the product type key.

### Example Response

```json
{
  "object": "product-type",
  "url": "/product-types/sampling_port",
  "name": "Sampling Port",
  "key": "sampling_port",
  "active": true,
  "image": "https://d1v15ko52mzsn3.cloudfront.net/a4e915e5-8f19-4ce1-b6e7-41ac2c201e96/img/no-image.png",
  "created": "11/24/2020",
  "last_updated": null
}
```

## Products by Product Type

This response returns a list of active products  ([see Product Object](./products.html#the-product-object)) of the specified product type. 

``` http
GET /product-types/hydromechanical_grease_interceptor/products
```

### Example Response

::: warning Just a heads up
Due to the large amount of information that is provided by this API for each product, this response can be somewhat large.
:::

```json
{
  "object": "list",
  "url": "/product-types/hydromechanical_grease_interceptor/products",
  "data": [
    {
      "object": "product",
      "url": "/products/4025-XXX-01",
      "name": "GB-50",
      "short_name": "GB-50",
      "type": "Hydromechanical Grease Interceptor",
      "part_number": "4025-XXX-01",
      "store_id": "151",
      "parent_store_id": "86",
      "description": "The GB-50 offers best-in-class certified grease capacity with 20% kitchen solids waste capacity. The unit does not require flow control, and it is first in the industry certified to Type D of the ASME standard.\nCompatible with the Safety Star® access restrictor prevents accidental entry. It is made of rugged polyethylene and fits through 36\" doorways. Use cast iron covers for outdoor installations, H-20 rated. Use composite covers for indoor installations, traffic load rated. The GB-50 uses FCR2 field cut riser system for below-grade installations and CA2 adapters for below-grade installations using 24\" corrugated pipe risers.",
      "short_description": "50 GPM; 439.5 lbs. grease capacity. Can be installed indoors or outdoors.",
      "images": {
        "object": "product-image-library",
        "primary": {
          "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-50/gb-50_1.jpg",
          "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_1_lg.jpg",
          "md": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_1_md.jpg",
          "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_1_sm.jpg",
          "object": "product-image"
        },
        "dimension": {
          "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-50/gb-50_2.jpg",
          "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_2_lg.jpg",
          "md": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_2_md.jpg",
          "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/gb-50_2_sm.jpg",
          "object": "product-image"
        }
      },
      "price": {
        "list": "2,095.00",
        "retail": {
          "multiplier": 0.7,
          "price": "1,466.50",
          "object": "price"
        },
        "wholesale": {
          "multiplier": 0.55,
          "price": "1,152.25",
          "object": "price"
        },
        "object": "product-price"
      },
      "installation_options": {
        "object": "installation-options",
        "location": {
          "indoors": true,
          "indoors_buried": true,
          "outdoors": true,
          "outdoors_buried": true,
          "other": false
        },
        "location_as_text": "Indoor/Outdoor, Buried",
        "traffic_area": true
      },
      "ratings": [
        {
          "flow_rate": {
            "standard": {
              "value": 50,
              "unit": "GPM",
              "object": "measurement"
            },
            "metric": {
              "value": 3.2,
              "unit": "L/s",
              "object": "measurement"
            },
            "object": "dimension-set"
          },
          "grease_capacity": {
            "weight": {
              "standard": {
                "value": 439.5,
                "unit": "lbs",
                "object": "measurement"
              },
              "metric": {
                "value": 199.3,
                "unit": "kg",
                "object": "measurement"
              },
              "object": "dimension-set"
            },
            "volume": {
              "standard": {
                "value": 60.21,
                "unit": "gal",
                "object": "measurement"
              },
              "metric": {
                "value": 227.9,
                "unit": "L",
                "object": "measurement"
              },
              "object": "dimension-set"
            },
            "object": "grease-capacity-measurement"
          },
          "label": null,
          "object": "rating"
        }
      ],
      "solids_capacity": {
        "standard": {
          "value": 13,
          "unit": "gal",
          "object": "measurement"
        },
        "metric": {
          "value": 49.2,
          "unit": "L",
          "object": "measurement"
        }
      },
      "liquid_capacity": {
        "standard": {
          "value": 65,
          "unit": "gal",
          "object": "measurement"
        },
        "metric": {
          "value": 246.1,
          "unit": "L",
          "object": "measurement"
        }
      },
      "base_dimensions": {
        "object": "dimension-set",
        "standard": {
          "object": "dimensions",
          "length": {
            "value": 37,
            "unit": "in",
            "object": "measurement"
          },
          "width": {
            "value": 32.25,
            "unit": "in",
            "object": "measurement"
          },
          "height": {
            "value": 10.5,
            "unit": "in",
            "object": "measurement"
          },
          "weight": {
            "value": 148,
            "unit": "lbs",
            "object": "measurement"
          }
        },
        "metric": {
          "object": "dimensions",
          "length": {
            "value": 94,
            "unit": "cm",
            "object": "measurement"
          },
          "width": {
            "value": 81.9,
            "unit": "cm",
            "object": "measurement"
          },
          "height": {
            "value": 26.7,
            "unit": "cm",
            "object": "measurement"
          },
          "weight": {
            "value": 67.1,
            "unit": "kg",
            "object": "measurement"
          }
        }
      },
      "shipping_dimensions": {
        "object": "dimension-set",
        "standard": {
          "object": "dimensions",
          "length": {
            "value": 37,
            "unit": "in",
            "object": "measurement"
          },
          "width": {
            "value": 32.25,
            "unit": "in",
            "object": "measurement"
          },
          "height": {
            "value": 10.5,
            "unit": "in",
            "object": "measurement"
          },
          "weight": {
            "value": 148,
            "unit": "lbs",
            "object": "measurement"
          }
        },
        "metric": {
          "object": "dimensions",
          "length": {
            "value": 94,
            "unit": "cm",
            "object": "measurement"
          },
          "width": {
            "value": 81.9,
            "unit": "cm",
            "object": "measurement"
          },
          "height": {
            "value": 26.7,
            "unit": "cm",
            "object": "measurement"
          },
          "weight": {
            "value": 67.1,
            "unit": "kg",
            "object": "measurement"
          }
        }
      },
      "options": {
        "object": "list",
        "data": []
      },
      "certifications": [
        {
          "name": "Listed by IAPMO to ASME A112.14.3 and CSA B481.1.",
          "link": "https://plm.iapmo.org/pld#/certificate/5317/1046",
          "type": "link",
          "object": "certification"
        },
        {
          "name": "ASME Test Report for GB-50",
          "link": "https://webtools.schierproducts.com/Downloads/GB-50-test-report-2020.pdf",
          "type": "link",
          "object": "certification"
        }
      ],
      "spec_sheet": {
        "object": "document-library",
        "pdf": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/spec-sheet-pdf.pdf",
        "dwg": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/spec-sheet-dwg.zip"
      },
      "installation_guide": {
        "object": "document-library",
        "pdf": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/installation-guide-pdf.pdf",
        "pdf_french": null,
        "pdf_spanish": null,
        "dwg": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/installation-guide-dwg.zip"
      },
      "revit": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/revit.zip",
      "owners_manual": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/owners-manual.pdf",
      "csi_masterspec": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-50/csi-masterspec.doc"
    }
    ...
  ]
}
```

