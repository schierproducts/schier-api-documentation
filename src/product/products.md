---

---

# Products

Products are any kind of inventory, "shelfable" item that Schier manufactures and/or sells.

A product can be further defined by variants with associated model numbers. These variants are unique combinations of attachments that are packaged with the product when it is sold.

## Base Endpoints

```http request
GET /products
GET /products/:model-number
```

## The Product Object

```json
{
  "object": "product",
  "url": "/products/4055-007-02",
  "name": "GB-250",
  "short_name": "GB-250",
  "type": "Hydromechanical Grease Interceptor",
  "part_number": "4055-007-02",
  "base_model": {
    "is_base_model": true,
    "base_part_number": "4055-007-02"
  },
  "store_id": "488",
  "description": "Great Basin Series Grease Interceptor ASME Certified to 100 gpm with 1,895 lbs grease storage capacity and 200 gpm with 1,196 lbs grease storage capacity. 4\" female thread fittings with (2) 4\" plain end adapter fittings, built-in flow control, built-in triple inlet and outlet, two built-in 4\" adjustable cover adapters, Safety StarTM access restrictor and two H20 load rated cast iron covers (proof load tested to 40,000 lbs.). Lifetime Warranty. Made in the USA.",
  "short_description": "100/200 GPM Great Basin Indoor/Outdoor High Capacity Grease Interceptor",
  "market_specific_description": "75 GPM, 277-gallon grease interceptor intended for Miami DERM market",
  "images": {
    "object": "product-image-library",
    "primary": {
      "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1.jpg",
      "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_lg.jpg",
      "md": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_md.jpg",
      "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_sm.jpg",
      "object": "image-library"
    },
    "dimension": {
      "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2.jpg",
      "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_lg.jpg",
      "md": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_md.jpg",
      "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_sm.jpg",
      "object": "image-library"
    }
  },
  "processing": {
    "object": "awareness-product",
    "url": "/processing?product=GB-250",
    "name": "GB-250",
    "lead_time": 6,
    "threshold": 12
  },
  "price": {
    "list": "6,194.00",
    "retail": {
      "multiplier": 0.7,
      "price": "4,335.80",
      "object": "price"
    },
    "wholesale": {
      "multiplier": 0.55,
      "price": "3,406.70",
      "object": "price"
    },
    "object": "product-price"
  },
  "installation_options": {
    "object": "installation-options",
    "location": {
      "object": "installation-options-location",
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
          "value": 100,
          "unit": "GPM",
          "object": "measurement"
        },
        "metric": {
          "value": 6.3,
          "unit": "L/s",
          "object": "measurement"
        },
        "object": "dimension-set"
      },
      "grease_capacity": {
        "weight": {
          "standard": {
            "value": 1895,
            "unit": "lbs",
            "object": "measurement"
          },
          "metric": {
            "value": 859.4,
            "unit": "kg",
            "object": "measurement"
          },
          "object": "dimension-set"
        },
        "volume": {
          "standard": {
            "value": 259.59,
            "unit": "gal",
            "object": "measurement"
          },
          "metric": {
            "value": 982.7,
            "unit": "L",
            "object": "measurement"
          },
          "object": "dimension-set"
        },
        "object": "grease-capacity-measurement"
      },
      "label": null,
      "object": "rating"
    },
    {
      "flow_rate": {
        "standard": {
          "value": 200,
          "unit": "GPM",
          "object": "measurement"
        },
        "metric": {
          "value": 12.6,
          "unit": "L/s",
          "object": "measurement"
        },
        "object": "dimension-set"
      },
      "grease_capacity": {
        "weight": {
          "standard": {
            "value": 1196,
            "unit": "lbs",
            "object": "measurement"
          },
          "metric": {
            "value": 542.4,
            "unit": "kg",
            "object": "measurement"
          },
          "object": "dimension-set"
        },
        "volume": {
          "standard": {
            "value": 163.84,
            "unit": "gal",
            "object": "measurement"
          },
          "metric": {
            "value": 620.2,
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
      "value": 69,
      "unit": "gal",
      "object": "measurement"
    },
    "metric": {
      "value": 261.2,
      "unit": "L",
      "object": "measurement"
    },
    "object": "dimension-set"
  },
  "liquid_capacity": {
    "standard": {
      "value": 277,
      "unit": "gal",
      "object": "measurement"
    },
    "metric": {
      "value": 1048.6,
      "unit": "L",
      "object": "measurement"
    },
    "object": "dimension-set"
  },
  "base_dimensions": {
    "object": "dimension-set",
    "standard": {
      "object": "dimensions",
      "length": {
        "value": 87,
        "unit": "in",
        "object": "measurement"
      },
      "width": {
        "value": 33,
        "unit": "in",
        "object": "measurement"
      },
      "height": {
        "value": 44,
        "unit": "in",
        "object": "measurement"
      },
      "weight": {
        "value": 376,
        "unit": "lbs",
        "object": "measurement"
      }
    },
    "metric": {
      "object": "dimensions",
      "length": {
        "value": 221,
        "unit": "cm",
        "object": "measurement"
      },
      "width": {
        "value": 83.8,
        "unit": "cm",
        "object": "measurement"
      },
      "height": {
        "value": 111.8,
        "unit": "cm",
        "object": "measurement"
      },
      "weight": {
        "value": 170.5,
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
        "value": 87,
        "unit": "in",
        "object": "measurement"
      },
      "width": {
        "value": 33,
        "unit": "in",
        "object": "measurement"
      },
      "height": {
        "value": 44,
        "unit": "in",
        "object": "measurement"
      },
      "weight": {
        "value": 431,
        "unit": "lbs",
        "object": "measurement"
      }
    },
    "metric": {
      "object": "dimensions",
      "length": {
        "value": 221,
        "unit": "cm",
        "object": "measurement"
      },
      "width": {
        "value": 83.8,
        "unit": "cm",
        "object": "measurement"
      },
      "height": {
        "value": 111.8,
        "unit": "cm",
        "object": "measurement"
      },
      "weight": {
        "value": 195.5,
        "unit": "kg",
        "object": "measurement"
      }
    }
  },
  "options": {
    "object": "list",
    "data": [
      {
        "id": 1,
        "name": "4\" Plain End Inlet/Outlet",
        "price": "0.00",
        "option_type": "connection",
        "description": "A 4\" inlet\/outlet",
        "store_id": null,
        "object": "product-option"
      },
      {
        "id": 16,
        "name": "H-20 Rated Pickable Cast Iron Cover",
        "price": "0.00",
        "option_type": "cover",
        "description": null,
        "store_id": null,
        "object": "product-option"
      }
    ]
  },
  "certifications": [
    {
      "name": "GB-250 IAPMO Listing",
      "link": "https://plm.iapmo.org/pld#/certificate/5317/1046",
      "type": "link",
      "object": "certification"
    },
    {
      "name": "GB-250 (100 GPM) ASME Report",
      "link": "https://webtools.schierproducts.com/Downloads/GB-250-test-report-100GPM-2019.pdf",
      "type": "link",
      "object": "certification"
    },
    {
      "name": "GB-250 (200 GPM) ASME Report",
      "link": "https://webtools.schierproducts.com/Downloads/GB-250-200GPM-test-report.pdf",
      "type": "link",
      "object": "certification"
    }
  ],
  "spec_sheet": {
    "object": "document-library",
    "pdf": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/spec-sheet-pdf.pdf",
    "dwg": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/spec-sheet-dwg.zip"
  },
  "installation_guide": {
    "object": "document-library",
    "pdf": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/installation-guide-pdf.pdf",
    "pdf_french": null,
    "pdf_spanish": null,
    "dwg": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/installation-guide-dwg.zip"
  },
  "revit": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/revit.zip",
  "owners_manual": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/owners-manual.pdf",
  "csi_masterspec": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/gb-250/csi-masterspec.doc"
}
```

### Attributes

::: details name <span class="code-note">string</span>
The full-length name of the product
:::

::: details short_name <span class="code-note">string</span>
A short abridged version of the product name. Can be used for listing views. 
:::

::: details type <span class="code-note">string</span>
The name of the associated product type [See Product Type](./product-types)
:::

::: details part_number <span class="code-note">string</span>
The unique, Schier-assigned model number for this product and it's variant.
:::

::: details base_model <span class="code-note">object</span>
If the queried product has multiple variants, notifies the user that the product is or is not the default product and provides the associated model number to retrieve the default product.
:::

::: details store_id <span class="code-note">optional, string</span>
The id of this product as it resides within the Schier eCommerce platforms and associated APIs.
:::

::: details parent_store_id <span class="code-note">optional, string</span>
If the product that you are trying to retrieve is a variant of the parent, this is the parent's product id.
:::

::: details description <span class="code-note">string</span>
The full-length product description that includes various specifications and any other related product.
:::

::: details short_description <span class="code-note">optional, string</span>
A short description with a limited number of characters that contains a concise, marketing-based description of the product.
:::

::: details market_specific_description <span class="code-note">optional, string</span>
A short description that contains some information regarding the product's use/implementation within a specific market/AHJ/etc.
:::

::: details images <span class="code-note">object</span>
A list of images for this product. They are broken up into 2 different groups:

* Primary - A basic marketing product photograph with no writing, backgrounds, etc.
* Dimension - Illustrates the dimensions of the product (length, width, height).

Within each of these groups, 4 different images are available in 4 different dimensions. The aspect ratio is maintained, but the width has been modified:

* `orig` - The original image that was uploaded
* `lg` - 1400 pixels
* `md` - 800 pixels
* `sm` - 300 pixels

```json
{
  "object": "product-image-library",
  "primary": {
    "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1.jpg",
    "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_lg.jpg",
    "md": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_md.jpg",
    "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_1_sm.jpg",
    "object": "image-library"
  },
  "dimension": {
    "orig": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2.jpg",
    "lg": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_lg.jpg",
    "md": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_md.jpg",
    "sm": "https://schier-resources.s3.us-east-2.amazonaws.com/product-photos/gb-250/gb-250_2_sm.jpg",
    "object": "image-library"
  }
}
```
:::

::: details processing <span class="code-note">optional, object</span>
The current lead/processing time of each of Schier's products needed to construct the product and make it ready for shipment

```json
{
  "object": "awareness-product",
  "url": "/processing?product=GB-250",
  "name": "GB-250",
  "lead_time": 6,
  "threshold": 12
}
```
:::

::: details price <span class="code-note">object</span>
Various product price breakdowns based on the market and/or purchase order. Includes the specific multipliers (rates) used to calculate each price.

```json
{
  "list": "6,194.00",
  "retail": {
    "multiplier": 0.7,
    "price": "4,335.80",
    "object": "price"
  },
  "wholesale": {
    "multiplier": 0.55,
    "price": "3,406.70",
    "object": "price"
  },
  "object": "product-price"
}
```
:::

::: details installation_options <span class="code-note">optional, object</span>
Various indicators on where this product can be installed. The `location.other` property may contain "free text" entries that might be a little more descriptive and thus less structured; ie "Under Sink."

```json
{
  "object": "installation-options",
  "location": {
    "object": "installation-options-location",
    "indoors": true,
    "indoors_buried": true,
    "outdoors": true,
    "outdoors_buried": true,
    "other": false
  },
  "location_as_text": "Indoor/Outdoor, Buried",
  "traffic_area": true
}
```
:::

::: details ratings <span class="code-note">optional, array</span>
A list of available flow rate/capacity combinations for this product.

[Also see Flow Rating](/product/other-resources/flow-rating.html)
:::

::: details solids_capacity <span class="code-note">optional, object</span>
The amount of solid grease the product can contain before losing it's efficiency and needing to be pumped 
:::

::: details liquid_capacity <span class="code-note">optional, object</span>
The amount of liquid that the product can hold. This liquid can contain both water and grease.
:::

::: details base_dimensions <span class="code-note">object</span>
The dimensions of the product without packaging. Contains both US standard and metric values.
:::

::: details shipping_dimensions <span class="code-note">object</span>
The dimensions of the product when it is shipped; including a potential palette. Contains both US standard and metric values.
:::

::: details options <span class="code-note">optional, object</span>
A list of attachments (cover, inlet, outlet, etc) that make a unique combination that drives this product's variant/model number.

```json
{
  "object": "list",
  "data": [
    {
      "id": 1,
      "name": "4\" Plain End Inlet/Outlet",
      "price": "0.00",
      "option_type": "connection",
      "description": "A 4\" inlet\/outlet",
      "store_id": null,
      "object": "product-option"
    },
    {
      "id": 16,
      "name": "H-20 Rated Pickable Cast Iron Cover",
      "price": "0.00",
      "option_type": "cover",
      "description": null,
      "store_id": null,
      "object": "product-option"
    }
  ]
}
```
:::

::: details certifications <span class="code-note">optional, array</span>
A list of either files or links; providing context for the product's certification.

[Also see Certification](/product/other-resources/certification.html)
:::

::: details spec_sheet <span class="code-note">object</span>
Links to the product spec sheet in either a `pdf` or `dwg` format.
:::

::: details installation_guide <span class="code-note">object</span>
Links to the product installation guide in either a `pdf` (English, Spanish, or French languages) or `dwg` format.
:::

::: details revit <span class="code-note">optional, string</span>
Link to a revit `ra` file for this product.
:::

::: details owners_manual <span class="code-note">optional, string</span>
Link to a `pdf` formatted file of this product's owners_manual.
:::

::: details csi_masterspec <span class="code-note">optional, string</span>
Link to a `pdf` formatted file of this product's CSI Masterspec file.
:::

## List of Products

Returns all of Schier's available products and their associated information.

::: warning Notice
Due to the detailed nature of this response, not all information is provided with each product. This payload can be very large.
:::

``` http
GET /products
```

### Example Response

```json
{
  "object": "list",
  "url": "/products",
  "data": [
    {
      "object": "product",
      "url": "/products/8020-003-01",
      "name": "AGS1",
      "short_name": "AGS1",
      "created": "11/30/2020",
      "last_updated": null,
      "type": "Support Kit",
      "part_number": "8020-003-01",
      "store_id": "263",
      "description": "Above grade support kit for use with the GB-250 in suspended installations only.",
      "short_description": "Above grade support kit for use with the GB-250 in suspended installations only.",
      "images": {
        "object": "product-image-library",
        "primary": {
          "orig": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image.png",
          "lg": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_lg.png",
          "md": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_md.png",
          "sm": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_sm.png",
          "object": "image-library"
        },
        "dimension": {
          "orig": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image.png",
          "lg": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_lg.png",
          "md": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_md.png",
          "sm": "https://d1v15ko52mzsn3.cloudfront.net/740c154f-29bb-4cc5-b954-25af2741722e/img/no-image_sm.png",
          "object": "image-library"
        }
      },
      "price": {
        "list": "616.00",
        "retail": {
          "multiplier": 0.7,
          "price": "431.20",
          "object": "price"
        },
        "wholesale": {
          "multiplier": 0.55,
          "price": "338.80",
          "object": "price"
        },
        "object": "product-price"
      },
      "base_dimensions": {
        "object": "dimension-set",
        "standard": {
          "object": "dimensions",
          "length": {
            "value": 46,
            "unit": "in",
            "object": "measurement"
          },
          "width": {
            "value": 4,
            "unit": "in",
            "object": "measurement"
          },
          "height": {
            "value": 4,
            "unit": "in",
            "object": "measurement"
          },
          "weight": {
            "value": 20,
            "unit": "lbs",
            "object": "measurement"
          }
        },
        "metric": {
          "object": "dimensions",
          "length": {
            "value": 116.8,
            "unit": "cm",
            "object": "measurement"
          },
          "width": {
            "value": 10.2,
            "unit": "cm",
            "object": "measurement"
          },
          "height": {
            "value": 10.2,
            "unit": "cm",
            "object": "measurement"
          },
          "weight": {
            "value": 9.1,
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
            "value": 46,
            "unit": "in",
            "object": "measurement"
          },
          "width": {
            "value": 4,
            "unit": "in",
            "object": "measurement"
          },
          "height": {
            "value": 4,
            "unit": "in",
            "object": "measurement"
          },
          "weight": {
            "value": 20,
            "unit": "lbs",
            "object": "measurement"
          }
        },
        "metric": {
          "object": "dimensions",
          "length": {
            "value": 116.8,
            "unit": "cm",
            "object": "measurement"
          },
          "width": {
            "value": 10.2,
            "unit": "cm",
            "object": "measurement"
          },
          "height": {
            "value": 10.2,
            "unit": "cm",
            "object": "measurement"
          },
          "weight": {
            "value": 9.1,
            "unit": "kg",
            "object": "measurement"
          }
        }
      },
      "options": {
        "object": "list",
        "data": []
      },
      "certifications": [],
      "spec_sheet": {
        "object": "document-library",
        "pdf": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/ags1/spec-sheet-pdf.pdf",
        "dwg": "https://schier-resources.s3.us-east-2.amazonaws.com/documents/ags1/spec-sheet-dwg.zip"
      },
      "installation_guide": {
        "object": "document-library",
        "pdf": null,
        "pdf_french": null,
        "pdf_spanish": null,
        "dwg": null
      },
      "revit": null,
      "owners_manual": null,
      "csi_masterspec": null
    }
    ...
  ]
}
```

## Get Product by Model Number

Returns a [Product Object](#the-product-object) by the provided model number.

``` http
GET /products/4055-007-02
```

::: danger Duplicates
There is a possibility that more than one product could have the same model number. To differentiate between the duplicates, append a `store_id` url parameter to the end of the request:

```http request
GET /products/4055-007-02?store_id=326
```
:::