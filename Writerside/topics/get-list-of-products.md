# Get List of Products

Return a list of products that are available within the product catalog.

> Please note that if you include the `variants=true` query parameter, this response **can be very long**. If you do not require the additional information it is our recommendation that you do not request it if you do not need it.
{style="warning"}

<api-endpoint openapi-path="./../api-spec/product-api/index.yaml" endpoint="/products" method="get">
    <request>
        <sample lang="JSON" title="URL">
            /products?limit=20&amp;offset=0
        </sample>
    </request>
    <response type="200">
        <sample lang="JSON">
            {
                "object": "list",
                "url": "/products?offset=0&amp;limit=20",
                "data": [
                    {
                        "object": "product",
                        "url": "/products/8020-008-01",
                        "id": 9,
                        "name": "ATD1",
                        "short_name": "ATD1",
                        "created": "11/30/2020",
                        "updated": "05/10/2023",
                        "types": [
                            "Cover Adapter Tie-Down"
                        ],
                        "part_number": "8020-008-01",
                        "base_model": {
                            "is_base_model": true,
                            "base_part_number": "8020-008-01"
                        },
                        "store_id": "268",
                        "shipping_group": "Non-Table",
                        "active": true,
                        "visible_on_store": true,
                        "description": "For securing cover adapters to base units in ABOVE GRADE INSTALLATIONS ONLY with increased head pressure conditions. One kit required for each accessway on base unit. Heavy-duty nylon cable ties and mounts with stainless steel fasteners. This kit is not required when an AGS2 support kit used is since the components of this kit come standard with AGS2 support kit used with models GB-500, GGI-500 and SI-500.",
                        "short_description": "For securing covers to units in ABOVE GRADE INSTALLATIONS with increased head pressure conditions.",
                        "market_specific_description": "Cover Adaptor Tie-Down Kit for securing covers to units in above grade installations with increased head pressure conditions.",
                        "website_url": "https://schierproducts.com/shop/atd1",
                        "images": {
                            "object": "product-image-library",
                            "primary": {
                                "object": "image-library",
                                "orig": "https://product-assets.schierproducts.com/product-photos/atd1/f15ad27c-bb95-4ad5-9310-48c31ebaaf0e.png",
                                "lg": "https://product-assets.schierproducts.com/product-photos/atd1/f15ad27c-bb95-4ad5-9310-48c31ebaaf0e_lg.png",
                                "md": "https://product-assets.schierproducts.com/product-photos/atd1/f15ad27c-bb95-4ad5-9310-48c31ebaaf0e_md.png",
                                "sm": "https://product-assets.schierproducts.com/product-photos/atd1/f15ad27c-bb95-4ad5-9310-48c31ebaaf0e_sm.png"
                            },
                            "dimension": {
                                "object": "image-library",
                                "orig": "https://api.schierproducts.com/img/no-image.png",
                                "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                                "md": "https://api.schierproducts.com/img/no-image_md.png",
                                "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                            }
                        },
                        "processing": {
                            "lead_time": 6,
                            "threshold": 8
                        },
                        "price": {
                            "object": "product-price",
                            "list": "50.00",
                            "retail": {
                                "object": "price",
                                "price": "35.00",
                                "multiplier": 0.7
                            },
                            "wholesale": {
                                "object": "price",
                                "price": "27.50",
                                "multiplier": 0.55
                            }
                        },
                        "base_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 9,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 12,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 2,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 1,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 22.9,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 30.5,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 5.1,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 0.5,
                                    "unit": "kg"
                                }
                            }
                        },
                        "shipping_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 9,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 12,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 2,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 1,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 22.9,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 30.5,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 5.1,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 0.5,
                                    "unit": "kg"
                                }
                            }
                        },
                        "manway_access_ports": 0,
                        "units_in_series": [],
                        "options": {
                            "object": "list",
                            "data": []
                        },
                        "certifications": [],
                        "spec_sheet": {
                            "object": "document-library",
                            "pdf": "https://product-assets.schierproducts.com/documents/atd1/spec-sheet-pdf-20230104225536.pdf",
                            "dwg": "https://product-assets.schierproducts.com/documents/atd1/spec-sheet-dwg-20230104225542.zip"
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
                    },
                    {
                        "object": "product",
                        "url": "/products/9500-069-01",
                        "id": 10,
                        "name": "C21M",
                        "short_name": "C21M",
                        "created": "11/30/2020",
                        "updated": "05/10/2023",
                        "types": [
                            "Cover"
                        ],
                        "part_number": "9500-069-01",
                        "base_model": {
                            "is_base_model": true,
                            "base_part_number": "9500-069-01"
                        },
                        "store_id": "120",
                        "shipping_group": "FFA-Item",
                        "active": true,
                        "visible_on_store": true,
                        "description": "Polypropylene cover, bolted 21\", pedestrian load rated for 450 lbs. (1,000 lbs. when buried with riser). For use with the following Schier units. Great Basin™ Indoor High Capacity Grease Interceptors (GB1, GB2, GB3)",
                        "short_description": "Polypropylene cover, bolted 21\", pedestrian rated to 450 lbs.",
                        "market_specific_description": "Polypropylene cover, bolted 21\", pedestrian rated to 450 lbs.",
                        "website_url": "https://schierproducts.com/shop/c21m",
                        "images": {
                            "object": "product-image-library",
                            "primary": {
                                "object": "image-library",
                                "orig": "https://product-assets.schierproducts.com/product-photos/c21m/68847a6b-3797-48f3-a227-b528e92b3a21.png",
                                "lg": "https://product-assets.schierproducts.com/product-photos/c21m/68847a6b-3797-48f3-a227-b528e92b3a21_lg.png",
                                "md": "https://product-assets.schierproducts.com/product-photos/c21m/68847a6b-3797-48f3-a227-b528e92b3a21_md.png",
                                "sm": "https://product-assets.schierproducts.com/product-photos/c21m/68847a6b-3797-48f3-a227-b528e92b3a21_sm.png"
                            },
                            "dimension": {
                                "object": "image-library",
                                "orig": "https://api.schierproducts.com/img/no-image.png",
                                "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                                "md": "https://api.schierproducts.com/img/no-image_md.png",
                                "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                            }
                        },
                        "processing": {
                            "lead_time": 1,
                            "threshold": 10
                        },
                        "price": {
                            "object": "product-price",
                            "list": "204.00",
                            "retail": {
                                "object": "price",
                                "price": "142.80",
                                "multiplier": 0.7
                            },
                            "wholesale": {
                                "object": "price",
                                "price": "112.20",
                                "multiplier": 0.55
                            }
                        },
                        "base_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 22,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 22,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 2,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 6,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 55.9,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 55.9,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 5.1,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 2.7,
                                    "unit": "kg"
                                }
                            }
                        },
                        "shipping_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 25,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 25,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 7,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 12,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 63.5,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 63.5,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 17.8,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 5.4,
                                    "unit": "kg"
                                }
                            }
                        },
                        "manway_access_ports": 0,
                        "units_in_series": [],
                        "options": {
                            "object": "list",
                            "data": []
                        },
                        "certifications": [],
                        "spec_sheet": {
                            "object": "document-library",
                            "pdf": "https://product-assets.schierproducts.com/documents/c21m/spec-sheet-pdf-20230206210500.pdf",
                            "dwg": "https://product-assets.schierproducts.com/documents/c21m/spec-sheet-dwg-20230206210441.zip"
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
                    },
                    {
                        "object": "product",
                        "url": "/products/9500-099-01",
                        "id": 75,
                        "name": "C24BC",
                        "short_name": "C24BC",
                        "created": "01/09/2023",
                        "updated": "03/16/2023",
                        "types": [
                            "Cover"
                        ],
                        "part_number": "9500-099-01",
                        "base_model": {
                            "is_base_model": true,
                            "base_part_number": "9500-099-01"
                        },
                        "store_id": "284",
                        "shipping_group": "FFA-Item",
                        "active": true,
                        "visible_on_store": true,
                        "description": "Composite cover, bolted 24\" gas/water tight, pedestrian rated for 2,000 lbs. For use with the following Schier units: Great Basin™ High Capacity Grease Interceptors (GB-50, GB-75, GB-250, GB-500, GB-1000, GB-1500) Billy Goat™ Kitchen Solids Interceptors (SI-50, SI-75, SI-250, SI-500) Sewer Viewer™ Wastewater Sampling Port (SV24 and SV24-O). Typically installed indoors/above grade.",
                        "short_description": "Composite cover, bolted 24\" gas/water tight, pedestrian rated to 2,000 lbs.",
                        "market_specific_description": null,
                        "website_url": "https://schierproducts.com/shop/c24bc",
                        "images": {
                            "object": "product-image-library",
                            "primary": {
                                "object": "image-library",
                                "orig": "https://product-assets.schierproducts.com/product-photos/c24bc/7c124542-7eca-4937-80d2-2560e7fdab8e.png",
                                "lg": "https://product-assets.schierproducts.com/product-photos/c24bc/7c124542-7eca-4937-80d2-2560e7fdab8e_lg.png",
                                "md": "https://product-assets.schierproducts.com/product-photos/c24bc/7c124542-7eca-4937-80d2-2560e7fdab8e_md.png",
                                "sm": "https://product-assets.schierproducts.com/product-photos/c24bc/7c124542-7eca-4937-80d2-2560e7fdab8e_sm.png"
                            },
                            "dimension": {
                                "object": "image-library",
                                "orig": "https://api.schierproducts.com/img/no-image.png",
                                "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                                "md": "https://api.schierproducts.com/img/no-image_md.png",
                                "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                            }
                        },
                        "processing": {
                            "lead_time": 0,
                            "threshold": 0
                        },
                        "price": {
                            "object": "product-price",
                            "list": "604.00",
                            "retail": {
                                "object": "price",
                                "price": "422.80",
                                "multiplier": 0.7
                            },
                            "wholesale": {
                                "object": "price",
                                "price": "332.20",
                                "multiplier": 0.55
                            }
                        },
                        "base_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 24,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 24,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 2,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 17,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 61,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 61,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 5.1,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 7.7,
                                    "unit": "kg"
                                }
                            }
                        },
                        "shipping_dimensions": {
                            "object": "dimension-set",
                            "standard": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 25,
                                    "unit": "in"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 25,
                                    "unit": "in"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 7,
                                    "unit": "in"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 20,
                                    "unit": "lbs"
                                }
                            },
                            "metric": {
                                "object": "dimensions",
                                "length": {
                                    "object": "measurement",
                                    "value": 63.5,
                                    "unit": "cm"
                                },
                                "width": {
                                    "object": "measurement",
                                    "value": 63.5,
                                    "unit": "cm"
                                },
                                "height": {
                                    "object": "measurement",
                                    "value": 17.8,
                                    "unit": "cm"
                                },
                                "weight": {
                                    "object": "measurement",
                                    "value": 9.1,
                                    "unit": "kg"
                                }
                            }
                        },
                        "manway_access_ports": 0,
                        "units_in_series": [],
                        "options": {
                            "object": "list",
                            "data": []
                        },
                        "certifications": [],
                        "spec_sheet": {
                            "object": "document-library",
                            "pdf": "https://product-assets.schierproducts.com/documents/c24bc/spec-sheet-pdf-20230110153518.pdf",
                            "dwg": "https://product-assets.schierproducts.com/documents/c24bc/spec-sheet-dwg-20230110153548.zip"
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
                ]
            }
        </sample>
    </response>
    <response type="401">
        <sample lang="JSON">
            {
                "message": "Unauthenticated" 
            }
        </sample>
    </response>
    <response type="403">
        <sample lang="JSON">
            {
                "message": "Forbidden" 
            }
        </sample>
    </response>
    <response type="404">
        <sample lang="JSON">
            {
                "message": "No products with these parameters could be found." 
            }
        </sample>
    </response>
    <response type="500">
        <sample lang="JSON">
            {
                "message": "There was a problem that happened on our end." 
            }
        </sample>
    </response>
</api-endpoint>