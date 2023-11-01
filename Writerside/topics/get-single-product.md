# Get Single Product

Retrieve a single product by it's part/model number.

<api-endpoint openapi-path="./../api-spec/product-api/index.yaml" endpoint="/products/{PartNumber}" method="GET" generate-samples="true">
    <request>
        <sample title="PartNumber" lang="JSON">
            4060-001-04
        </sample>
    </request>
<response type="200">
<sample lang="JSON">
{
    "object": "product",
    "url": "/products/4060-001-04",
    "id": 56,
    "name": "GB1",
    "short_name": "GB1",
    "created": "12/15/2020",
    "updated": "12/30/2022",
    "types": [
        "Hydromechanical Grease Interceptor"
    ],
    "part_number": "4060-001-04",
    "base_model": {
        "is_base_model": true,
        "base_part_number": "4060-001-04"
    },
    "store_id": "756",
    "parent_store_id": "134",
    "shipping_group": "Non-Table",
    "active": true,
    "visible_on_store": true,
    "description": "20/25 GPM Great Basin\u2122 Indoor High Capacity Grease Interceptor  Rugged polyethylene tank with built-in Flow Control Cartridge\u2122, easy to remove for cleaning. Compact design that installs under sinks, on the floor, or buried below grade. Built-in triple outlet for installation flexibility. Includes plain end fittings to connect to 2\u201d and 3\" pipe. Uses FCR1 field cut riser system for a maximum extension of 25\".",
    "short_description": "20/25 GPM Great Basin\u2122 Indoor High Capacity Grease Interceptor",
    "market_specific_description": "20/25 GPM, 10-gallon indoor grease interceptor",
    "website_url": "https://schierproducts.com/shop/gb1",
    "images": {
        "object": "product-image-library",
        "primary": {
            "object": "image-library",
            "orig": "https://product-assets.schierproducts.com/product-photos/gb1/bd33264f-3b5c-4042-9616-a44ad6793f75.png",
            "lg": "https://product-assets.schierproducts.com/product-photos/gb1/bd33264f-3b5c-4042-9616-a44ad6793f75_lg.png",
            "md": "https://product-assets.schierproducts.com/product-photos/gb1/bd33264f-3b5c-4042-9616-a44ad6793f75_md.png",
            "sm": "https://product-assets.schierproducts.com/product-photos/gb1/bd33264f-3b5c-4042-9616-a44ad6793f75_sm.png"
        },
        "dimension": {
            "object": "image-library",
            "orig": "https://product-assets.schierproducts.com/product-photos/gb1/52662a77-e1aa-4242-b917-e2a20c9f3ba9.jpg",
            "lg": "https://product-assets.schierproducts.com/product-photos/gb1/52662a77-e1aa-4242-b917-e2a20c9f3ba9_lg.jpg",
            "md": "https://product-assets.schierproducts.com/product-photos/gb1/52662a77-e1aa-4242-b917-e2a20c9f3ba9_md.jpg",
            "sm": "https://product-assets.schierproducts.com/product-photos/gb1/52662a77-e1aa-4242-b917-e2a20c9f3ba9_sm.jpg"
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
                "object": "dimension-set",
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
                    "object": "dimension-set",
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
                    "object": "dimension-set",
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
        }
    ],
    "solids_capacity": {
        "object": "dimension-set",
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
        "object": "dimension-set",
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
    "related_products": {
        "object": "list",
        "data": [
            {
                "object": "product",
                "id": 57,
                "name": "GB1-CT",
                "short_name": "GB1-CT",
                "part_number": "4060-101-04",
                "short_description": "15 GPM Great Basin\u2122 Indoor Super-Capacity Grease Interceptor intended for Connecticut market.",
                "market_specific_description": "15 GPM, 10-gallon indoor grease interceptor intended for Connecticut market",
                "store_id": "146",
                "link": "https://schierproducts.com/shop/gb1-ct",
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
                "types": [
                    "Hydromechanical Grease Interceptor"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/gb1-ct/17298cb1-f4a1-48f5-af17-3decec7bc9ae_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e.jpg",
                        "lg": "https://product-assets.schierproducts.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_lg.jpg",
                        "md": "https://product-assets.schierproducts.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_md.jpg",
                        "sm": "https://product-assets.schierproducts.com/product-photos/gb1-ct/c050705b-2c06-4e27-8e08-12b669e8116e_sm.jpg"
                    }
                }
            }
        ]
    },
    "accessories": {
        "object": "list",
        "data": [
            {
                "object": "product",
                "id": 12,
                "name": "FCR1",
                "short_name": "FCR1",
                "part_number": "8010-005-01",
                "short_description": "Riser for grease interceptors with 21\" covers installed below grade. ",
                "market_specific_description": "Field Cut Riser for grease interceptors with 21\" covers installed below grade. For use with models GB1, GB2 and GB3.",
                "store_id": "199",
                "link": "https://schierproducts.com/shop/fcr1",
                "price": {
                    "object": "product-price",
                    "list": "471.00",
                    "retail": {
                        "object": "price",
                        "price": "329.70",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "259.05",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Riser"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/fcr1/1eca2500-ab48-4aa8-980e-38789021cb97.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/fcr1/1eca2500-ab48-4aa8-980e-38789021cb97_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/fcr1/1eca2500-ab48-4aa8-980e-38789021cb97_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/fcr1/1eca2500-ab48-4aa8-980e-38789021cb97_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://api.schierproducts.com/img/no-image.png",
                        "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                        "md": "https://api.schierproducts.com/img/no-image_md.png",
                        "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                    }
                },
                "component": false
            },
            {
                "object": "product",
                "id": 7,
                "name": "CC1",
                "short_name": "CC1",
                "part_number": "8030-003-01",
                "short_description": "Clamping collar for units with 21\" covers, recessed and suspended.",
                "market_specific_description": "Clamping collar for units with 21\" covers, recessed and suspended. Requires FCR1. For use with models GB1, GB2 and GB3.",
                "store_id": "129",
                "link": "https://schierproducts.com/shop/cc1",
                "price": {
                    "object": "product-price",
                    "list": "474.00",
                    "retail": {
                        "object": "price",
                        "price": "331.80",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "260.70",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Clamping Collar"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/cc1/917a3bc6-6f30-400c-92ae-65fa23287fa8.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/cc1/917a3bc6-6f30-400c-92ae-65fa23287fa8_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/cc1/917a3bc6-6f30-400c-92ae-65fa23287fa8_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/cc1/917a3bc6-6f30-400c-92ae-65fa23287fa8_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://api.schierproducts.com/img/no-image.png",
                        "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                        "md": "https://api.schierproducts.com/img/no-image_md.png",
                        "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                    }
                },
                "component": false
            },
            {
                "object": "product",
                "id": 34,
                "name": "SV10",
                "short_name": "SV10",
                "part_number": "8065-001-01",
                "short_description": "Sewer Viewer wastewater sampling port",
                "market_specific_description": "Sewer Viewer wastewater sampling port providing 8-inch-wide visual and sampling access to the waste stream in 4\" and 6\" commercial building drain lines.",
                "store_id": "255",
                "link": "https://schierproducts.com/shop/sv10",
                "price": {
                    "object": "product-price",
                    "list": "580.00",
                    "retail": {
                        "object": "price",
                        "price": "406.00",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "319.00",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Sampling Port"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv10/060df13b-3249-4858-a1e4-53f4ccaf4b4f.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv10/060df13b-3249-4858-a1e4-53f4ccaf4b4f_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv10/060df13b-3249-4858-a1e4-53f4ccaf4b4f_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv10/060df13b-3249-4858-a1e4-53f4ccaf4b4f_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv10/sv10_2.jpg",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv10/sv10_2_lg.jpg",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv10/sv10_2_md.jpg",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv10/sv10_2_sm.jpg"
                    }
                },
                "component": true
            },
            {
                "object": "product",
                "id": 31,
                "name": "SV24",
                "short_name": "SV24",
                "part_number": "8064-XXX-01",
                "short_description": "Sewer Viewer Wastewater Sampling Port",
                "market_specific_description": "Sewer Viewer wastewater sampling port providing 20-inch-wide visual and sampling access to the waste stream in 4\" and 6\" commercial building drain lines.",
                "store_id": "192",
                "link": "https://schierproducts.com/shop/sv24",
                "price": {
                    "object": "product-price",
                    "list": "1,673.00",
                    "retail": {
                        "object": "price",
                        "price": "1,171.10",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "920.15",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Sampling Port"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv24/bca575b7-15f6-4296-8a01-88e92fffb3c2.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv24/bca575b7-15f6-4296-8a01-88e92fffb3c2_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv24/bca575b7-15f6-4296-8a01-88e92fffb3c2_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv24/bca575b7-15f6-4296-8a01-88e92fffb3c2_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv24/47deb211-0b91-4a27-aa36-d35124a3562a.jpg",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv24/47deb211-0b91-4a27-aa36-d35124a3562a_lg.jpg",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv24/47deb211-0b91-4a27-aa36-d35124a3562a_md.jpg",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv24/47deb211-0b91-4a27-aa36-d35124a3562a_sm.jpg"
                    }
                },
                "component": true
            },
            {
                "object": "product",
                "id": 33,
                "name": "SV24-O",
                "short_name": "SV24-O",
                "part_number": "8062-0XX-03",
                "short_description": "Sewer Viewer wastewater sampling port",
                "market_specific_description": "Sewer Viewer wastewater sampling port providing 20-inch-wide visual and sampling access to the waste stream in 4\" commercial building drain lines.",
                "store_id": "267",
                "link": "https://schierproducts.com/shop/sv24-o",
                "price": {
                    "object": "product-price",
                    "list": "2,115.00",
                    "retail": {
                        "object": "price",
                        "price": "1,480.50",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "1,163.25",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Sampling Port"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv24-o/f31a4856-dcd8-48c9-9d33-c27181f04320.png",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv24-o/f31a4856-dcd8-48c9-9d33-c27181f04320_lg.png",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv24-o/f31a4856-dcd8-48c9-9d33-c27181f04320_md.png",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv24-o/f31a4856-dcd8-48c9-9d33-c27181f04320_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://product-assets.schierproducts.com/product-photos/sv24-o/d56af4a4-2625-426d-8456-e3e0ecb02ba4.jpg",
                        "lg": "https://product-assets.schierproducts.com/product-photos/sv24-o/d56af4a4-2625-426d-8456-e3e0ecb02ba4_lg.jpg",
                        "md": "https://product-assets.schierproducts.com/product-photos/sv24-o/d56af4a4-2625-426d-8456-e3e0ecb02ba4_md.jpg",
                        "sm": "https://product-assets.schierproducts.com/product-photos/sv24-o/d56af4a4-2625-426d-8456-e3e0ecb02ba4_sm.jpg"
                    }
                },
                "component": true
            },
            {
                "object": "product",
                "id": 18,
                "name": "PDK1",
                "short_name": "PDK1",
                "part_number": "8400-015-01",
                "short_description": "This drawoff valve kit may be used to remove interceptor contents manually versus pumpout.",
                "market_specific_description": null,
                "store_id": "270",
                "link": "https://schierproducts.com/shop/pdk1",
                "price": {
                    "object": "product-price",
                    "list": "281.00",
                    "retail": {
                        "object": "price",
                        "price": "196.70",
                        "multiplier": 0.7
                    },
                    "wholesale": {
                        "object": "price",
                        "price": "154.55",
                        "multiplier": 0.55
                    }
                },
                "types": [
                    "Drawoff Kit"
                ],
                "images": {
                    "object": "product-image-library",
                    "primary": {
                        "object": "image-library",
                        "orig": "https://api.schierproducts.com/img/no-image.png",
                        "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                        "md": "https://api.schierproducts.com/img/no-image_md.png",
                        "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                    },
                    "dimension": {
                        "object": "image-library",
                        "orig": "https://api.schierproducts.com/img/no-image.png",
                        "lg": "https://api.schierproducts.com/img/no-image_lg.png",
                        "md": "https://api.schierproducts.com/img/no-image_md.png",
                        "sm": "https://api.schierproducts.com/img/no-image_sm.png"
                    }
                },
                "component": false
            }
        ]
    },
    "alternate_accessories": {
        "object": "list",
        "data": []
    },
    "options": {
        "object": "list",
        "data": [
            {
                "id": 8,
                "name": "4\" FPT Connections w/ 3\" and 2\" Plain End Adapters",
                "option_type": "Inlet/Outlet",
                "description": null,
                "store_id": null,
                "attributes": [
                    {
                        "connection_type": "inlet",
                        "diameter": "2\"",
                        "thread_type": "plain",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    },
                    {
                        "connection_type": "inlet",
                        "diameter": "3\"",
                        "thread_type": "plain",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    },
                    {
                        "connection_type": "inlet",
                        "diameter": "4\"",
                        "thread_type": "female-thread-fpt",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    },
                    {
                        "connection_type": "outlet",
                        "diameter": "2\"",
                        "thread_type": "plain",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    },
                    {
                        "connection_type": "outlet",
                        "diameter": "3\"",
                        "thread_type": "plain",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    },
                    {
                        "connection_type": "outlet",
                        "diameter": "4\"",
                        "thread_type": "female-thread-fpt",
                        "connection_feature": null,
                        "has_pumpout_ports": false,
                        "object": "product-option-attribute"
                    }
                ],
                "material": "plastic",
                "load_rating": null,
                "object": "product-option"
            },
            {
                "id": 15,
                "name": "Pedestrian Rated Polypropylene Cover",
                "option_type": "Cover",
                "description": "Bolted 21\" cover, pedestrian load rated for 450 lbs. (1,000 lbs. when buried with riser). Recommended for indoor installation only.",
                "store_id": null,
                "attributes": [],
                "material": "composite",
                "load_rating": {
                    "object": "dimension-set",
                    "standard": {
                        "object": "measurement",
                        "value": 1000,
                        "unit": "lbs"
                    },
                    "metric": {
                        "object": "measurement",
                        "value": 453.5,
                        "unit": "kg"
                    }
                },
                "object": "product-option"
            }
        ]
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
        "pdf": "https://product-assets.schierproducts.com/documents/gb1/4060-001-04-spec-sheet-pdf.pdf",
        "dwg": "https://product-assets.schierproducts.com/documents/gb1/4060-001-04-spec-sheet-dwg.dwg"
    },
    "installation_guide": {
        "object": "document-library",
        "pdf": "https://product-assets.schierproducts.com/documents/gb1/installation-guide-pdf-20230209173441.pdf",
        "pdf_french": "https://product-assets.schierproducts.com/documents/gb1/installation-guide-pdf-french.pdf",
        "pdf_spanish": null,
        "dwg": "https://product-assets.schierproducts.com/documents/gb1/installation-guide-dwg-20230206202505.zip"
    },
    "revit": "https://product-assets.schierproducts.com/documents/gb1/revit.zip",
    "owners_manual": "https://product-assets.schierproducts.com/assets/GBOM-4_2023.pdf",
    "csi_masterspec": "https://product-assets.schierproducts.com/assets/masterspec.doc"
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
            "message": "The product with the part number \"4060-001-04\" could not be found." 
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