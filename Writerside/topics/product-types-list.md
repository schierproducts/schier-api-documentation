# Get List of Product Types

Return a list of product types that are available within the product catalog.

<api-endpoint openapi-path="./../api-spec/product-api/index.yaml" endpoint="/product-types" method="get">
    <response type="200">
        <sample>
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
                    "image": null,
                    "created": "11/24/2020",
                    "last_updated": null,
                    "parent": null,
                    "types": []
                },
                {
                    "object": "product-type",
                    "url": "/product-types/gravity_grease_interceptor",
                    "name": "Gravity Grease Interceptor",
                    "key": "gravity_grease_interceptor",
                    "active": true,
                    "image": null,
                    "created": "11/24/2020",
                    "last_updated": null,
                    "parent": null,
                    "types": []
                }
            ]
        }
        </sample>
    </response>
    <response type="400">
        <sample>
        {
            "message": "This request could not be completed." 
        }
        </sample>
    </response>
</api-endpoint>