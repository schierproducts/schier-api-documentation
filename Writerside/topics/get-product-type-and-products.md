# Get Single Product Type and it&apos;s Products

Retrieve a single product type by it's key identifier, and all the individual products that belong to this product type "category." 

<api-endpoint openapi-path="./../api-spec/product-api/index.yaml" endpoint="/product-types/{ProductTypeKey}/products" method="GET" generate-samples="true">
    <request>
        <sample title="ProductTypeKey" lang="JSON">
            sampling_port
        </sample>
    </request>
    <response type="200">
        <sample lang="JSON">
        {
            "object": "list",
            "url": "/product-types/hydromechanical_grease_interceptor/products",
            "data": [
                {
                    "object": "product",
                    "url": "/products/4060-101-04",
                    "id": 57,
                    "name": "GB1-CT",
                    "short_name": "GB1-CT",
                    "created": "12/15/2020",
                    "updated": "07/18/2023",
                    "types": [
                        "Hydromechanical Grease Interceptor"
                    ],
                    "part_number": "4060-101-04",
                    "base_model": {
                        "is_base_model": true,
                        "base_part_number": "4060-101-04"
                    },
                    "store_id": "146",
                    "shipping_group": "Non-Table",
                    "active": true,
                    "visible_on_store": true,
                    "description": "15 GPM Great Basin™ Indoor Super-Capacity Grease Interceptor intended for Connecticut market.  Rugged polyethylene tank with built-in Flow Control Cartridge™, easy to remove for cleaning. Compact design that installs under sinks, on the floor, or buried below grade. Built-in triple outlet for installation flexibility. Includes fittings to connect to 2,” 3\", or 4\" pipe. Uses FCR1 field cut riser system for a maximum extension of 25\".  This unit is factory rated only. Please ensure unit meets local ordinance before specifying.",
                    "short_description": "15 GPM Great Basin™ Indoor Super-Capacity Grease Interceptor intended for Connecticut market.",
                    "market_specific_description": "15 GPM, 10-gallon indoor grease interceptor intended for Connecticut market",
                    "website_url": "https://schierproducts.com/shop/gb1-ct",
                    "images": {
                        "object": "product-image-library",
                        "primary": {
                            "object": "image-library",
                            "orig": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae.png",
                            "lg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_lg.png",
                            "md": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_md.png",
                            "sm": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_sm.png"
                        },
                        "dimension": {
                            "object": "image-library",
                            "orig": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e.jpg",
                            "lg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_lg.jpg",
                            "md": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_md.jpg",
                            "sm": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_sm.jpg"
                        }
                    },
                    "processing": {
                        "lead_time": 1,
                        "threshold": 8
                    },
                    "price": {
                        "object": "product-price",
                        "list": "858.00",
                        "retail": {
                            "object": "price",
                            "price": "600.60",
                            "multiplier": 0.7
                        },
                        "wholesale": {
                            "object": "price",
                            "price": "471.90",
                            "multiplier": 0.55
                        }
                    },
                    "installation_options": {
                        "object": "installation-options",
                        "location": {
                            "object": "installation-options-location",
                            "indoors": true,
                            "outdoors": false,
                            "above_grade": true,
                            "below_grade": true,
                            "other": false
                        },
                        "location_as_text": "Above/Below Grade, Indoor",
                        "traffic_area": false
                    },
                    "ratings": [
                        {
                            "object": "rating",
                            "flow_rate": {
                                "object": "dimension",
                                "standard": {
                                    "object": "measurement",
                                    "value": 15,
                                    "unit": "GPM"
                                },
                                "metric": {
                                    "object": "measurement",
                                    "value": 0.9,
                                    "unit": "L/s"
                                }
                            },
                            "grease_capacity": {
                                "object": "grease-capacity-measurement",
                                "weight": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 70,
                                        "unit": "lbs"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 31.7,
                                        "unit": "kg"
                                    }
                                },
                                "volume": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 9.59,
                                        "unit": "gal"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 36.3,
                                        "unit": "L"
                                    }
                                }
                            },
                            "label": null,
                            "rating_id": 35,
                            "order": 1,
                            "is_99_percent_efficient": false
                        }
                    ],
                    "solids_capacity": {
                        "object": "dimension",
                        "standard": {
                            "object": "measurement",
                            "value": 1.3,
                            "unit": "gal"
                        },
                        "metric": {
                            "object": "measurement",
                            "value": 4.9,
                            "unit": "L"
                        }
                    },
                    "liquid_capacity": {
                        "object": "dimension",
                        "standard": {
                            "object": "measurement",
                            "value": 10,
                            "unit": "gal"
                        },
                        "metric": {
                            "object": "measurement",
                            "value": 37.9,
                            "unit": "L"
                        }
                    },
                    "base_dimensions": {
                        "object": "dimension-set",
                        "standard": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 27,
                                "unit": "in"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 23,
                                "unit": "in"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 12,
                                "unit": "in"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 39,
                                "unit": "lbs"
                            }
                        },
                        "metric": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 68.6,
                                "unit": "cm"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 58.4,
                                "unit": "cm"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 30.5,
                                "unit": "cm"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 17.7,
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
                                "value": 28,
                                "unit": "in"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 24,
                                "unit": "in"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 13,
                                "unit": "in"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 41,
                                "unit": "lbs"
                            }
                        },
                        "metric": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 71.1,
                                "unit": "cm"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 61,
                                "unit": "cm"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 33,
                                "unit": "cm"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 18.6,
                                "unit": "kg"
                            }
                        }
                    },
                    "manway_access_ports": 1,
                    "units_in_series": [],
                    "options": {
                        "object": "list",
                        "data": []
                    },
                    "certifications": [],
                    "spec_sheet": {
                        "object": "document-library",
                        "pdf": null,
                        "dwg": null
                    },
                    "installation_guide": {
                        "object": "document-library",
                        "pdf": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1-ct/installation-guide-pdf-20230206202208.pdf",
                        "pdf_french": null,
                        "pdf_spanish": null,
                        "dwg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1-ct/installation-guide-dwg-20230206202146.zip"
                    },
                    "revit": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1-ct/revit.zip",
                    "owners_manual": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/assets/GBOM-4_2023.pdf",
                    "csi_masterspec": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/assets/masterspec.doc"
                },
                {
                    "object": "product",
                    "url": "/products/4060-001-04",
                    "id": 56,
                    "name": "GB1",
                    "short_name": "GB1",
                    "created": "12/15/2020",
                    "updated": "07/18/2023",
                    "types": [
                        "Hydromechanical Grease Interceptor"
                    ],
                    "part_number": "4060-001-04",
                    "base_model": {
                        "is_base_model": true,
                        "base_part_number": "4060-001-04"
                    },
                    "store_id": "134",
                    "shipping_group": "Non-Table",
                    "active": true,
                    "visible_on_store": true,
                    "description": "20/25 GPM Great Basin™ Indoor High Capacity Grease Interceptor  Rugged polyethylene tank with built-in Flow Control Cartridge™, easy to remove for cleaning. Compact design that installs under sinks, on the floor, or buried below grade. Built-in triple outlet for installation flexibility. Includes plain end fittings to connect to 2” and 3\" pipe. Uses FCR1 field cut riser system for a maximum extension of 25\".",
                    "short_description": "20/25 GPM Great Basin™ Indoor High Capacity Grease Interceptor",
                    "market_specific_description": "20/25 GPM, 10-gallon indoor grease interceptor",
                    "website_url": "https://schierproducts.com/shop/gb1",
                    "images": {
                        "object": "product-image-library",
                        "primary": {
                            "object": "image-library",
                            "orig": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/750151c7-e932-4310-9526-8099ad2109bd.png",
                            "lg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/750151c7-e932-4310-9526-8099ad2109bd_lg.png",
                            "md": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/750151c7-e932-4310-9526-8099ad2109bd_md.png",
                            "sm": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/750151c7-e932-4310-9526-8099ad2109bd_sm.png"
                        },
                        "dimension": {
                            "object": "image-library",
                            "orig": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/881def63-8b91-4464-8c49-b575331132c0.jpg",
                            "lg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/881def63-8b91-4464-8c49-b575331132c0_lg.jpg",
                            "md": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/881def63-8b91-4464-8c49-b575331132c0_md.jpg",
                            "sm": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/product-photos/gb1/881def63-8b91-4464-8c49-b575331132c0_sm.jpg"
                        }
                    },
                    "processing": {
                        "lead_time": 1,
                        "threshold": 13
                    },
                    "price": {
                        "object": "product-price",
                        "list": "858.00",
                        "retail": {
                            "object": "price",
                            "price": "600.60",
                            "multiplier": 0.7
                        },
                        "wholesale": {
                            "object": "price",
                            "price": "471.90",
                            "multiplier": 0.55
                        }
                    },
                    "installation_options": {
                        "object": "installation-options",
                        "location": {
                            "object": "installation-options-location",
                            "indoors": true,
                            "outdoors": false,
                            "above_grade": true,
                            "below_grade": true,
                            "other": false
                        },
                        "location_as_text": "Above/Below Grade, Indoor",
                        "traffic_area": false
                    },
                    "ratings": [
                        {
                            "object": "rating",
                            "flow_rate": {
                                "object": "dimension",
                                "standard": {
                                    "object": "measurement",
                                    "value": 20,
                                    "unit": "GPM"
                                },
                                "metric": {
                                    "object": "measurement",
                                    "value": 1.3,
                                    "unit": "L/s"
                                }
                            },
                            "grease_capacity": {
                                "object": "grease-capacity-measurement",
                                "weight": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 70,
                                        "unit": "lbs"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 31.7,
                                        "unit": "kg"
                                    }
                                },
                                "volume": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 9.59,
                                        "unit": "gal"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 36.3,
                                        "unit": "L"
                                    }
                                }
                            },
                            "label": null,
                            "rating_id": 32,
                            "order": 1,
                            "is_99_percent_efficient": false
                        },
                        {
                            "object": "rating",
                            "flow_rate": {
                                "object": "dimension",
                                "standard": {
                                    "object": "measurement",
                                    "value": 25,
                                    "unit": "GPM"
                                },
                                "metric": {
                                    "object": "measurement",
                                    "value": 1.6,
                                    "unit": "L/s"
                                }
                            },
                            "grease_capacity": {
                                "object": "grease-capacity-measurement",
                                "weight": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 64,
                                        "unit": "lbs"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 29,
                                        "unit": "kg"
                                    }
                                },
                                "volume": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 8.77,
                                        "unit": "gal"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 33.2,
                                        "unit": "L"
                                    }
                                }
                            },
                            "label": null,
                            "rating_id": 33,
                            "order": 2,
                            "is_99_percent_efficient": false
                        },
                        {
                            "object": "rating",
                            "flow_rate": {
                                "object": "dimension",
                                "standard": {
                                    "object": "measurement",
                                    "value": 20,
                                    "unit": "GPM"
                                },
                                "metric": {
                                    "object": "measurement",
                                    "value": 1.3,
                                    "unit": "L/s"
                                }
                            },
                            "grease_capacity": {
                                "object": "grease-capacity-measurement",
                                "weight": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 16,
                                        "unit": "lbs"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 7.3,
                                        "unit": "kg"
                                    }
                                },
                                "volume": {
                                    "object": "dimension",
                                    "standard": {
                                        "object": "measurement",
                                        "value": 2.19,
                                        "unit": "gal"
                                    },
                                    "metric": {
                                        "object": "measurement",
                                        "value": 8.3,
                                        "unit": "L"
                                    }
                                }
                            },
                            "label": "at 99%",
                            "rating_id": 34,
                            "order": 3,
                            "is_99_percent_efficient": true
                        }
                    ],
                    "solids_capacity": {
                        "object": "dimension",
                        "standard": {
                            "object": "measurement",
                            "value": 1.3,
                            "unit": "gal"
                        },
                        "metric": {
                            "object": "measurement",
                            "value": 4.9,
                            "unit": "L"
                        }
                    },
                    "liquid_capacity": {
                        "object": "dimension",
                        "standard": {
                            "object": "measurement",
                            "value": 10,
                            "unit": "gal"
                        },
                        "metric": {
                            "object": "measurement",
                            "value": 37.9,
                            "unit": "L"
                        }
                    },
                    "base_dimensions": {
                        "object": "dimension-set",
                        "standard": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 27,
                                "unit": "in"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 23,
                                "unit": "in"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 12,
                                "unit": "in"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 39,
                                "unit": "lbs"
                            }
                        },
                        "metric": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 68.6,
                                "unit": "cm"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 58.4,
                                "unit": "cm"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 30.5,
                                "unit": "cm"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 17.7,
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
                                "value": 28,
                                "unit": "in"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 24,
                                "unit": "in"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 13,
                                "unit": "in"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 41,
                                "unit": "lbs"
                            }
                        },
                        "metric": {
                            "object": "dimensions",
                            "length": {
                                "object": "measurement",
                                "value": 71.1,
                                "unit": "cm"
                            },
                            "width": {
                                "object": "measurement",
                                "value": 61,
                                "unit": "cm"
                            },
                            "height": {
                                "object": "measurement",
                                "value": 33,
                                "unit": "cm"
                            },
                            "weight": {
                                "object": "measurement",
                                "value": 18.6,
                                "unit": "kg"
                            }
                        }
                    },
                    "manway_access_ports": 1,
                    "units_in_series": [],
                    "options": {
                        "object": "list",
                        "data": []
                    },
                    "certifications": [
                        {
                            "object": "certification",
                            "type": "link",
                            "name": "IAPMO Listing for GB1",
                            "link": "https://plm.iapmo.org/pld#/certificate/5317/1046"
                        },
                        {
                            "object": "certification",
                            "type": "link",
                            "name": "ASME Test Report for GB1 (20)",
                            "link": "https://product-assets.schierproducts.com/documents/gb1/asme-test-report-for-gb1-20.pdf"
                        },
                        {
                            "object": "certification",
                            "type": "link",
                            "name": "ASME Test Report for GB1 (25)",
                            "link": "https://product-assets.schierproducts.com/documents/gb1/asme-test-report-for-gb1-25.pdf"
                        }
                    ],
                    "spec_sheet": {
                        "object": "document-library",
                        "pdf": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1/spec-sheet-pdf-20230209173304.pdf",
                        "dwg": null
                    },
                    "installation_guide": {
                        "object": "document-library",
                        "pdf": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1/installation-guide-pdf-20230209173441.pdf",
                        "pdf_french": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1/installation-guide-pdf-french.pdf",
                        "pdf_spanish": null,
                        "dwg": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1/installation-guide-dwg-20230206202505.zip"
                    },
                    "revit": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/documents/gb1/revit.zip",
                    "owners_manual": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/assets/GBOM-4_2023.pdf",
                    "csi_masterspec": "https://stg-product-api.nyc3.cdn.digitaloceanspaces.com/assets/masterspec.doc"
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
            "message": "The product type with the key of 'Sample Type' could not be found" 
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