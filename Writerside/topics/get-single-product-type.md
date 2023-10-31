# Get Single Product Type

Retrieve a single product type by it's key identifier

<api-endpoint openapi-path="./../api-spec/product-api/index.yaml" endpoint="/product-types/{ProductTypeKey}" method="GET" generate-samples="true">
<request>
<sample title="ProductTypeKey" lang="JSON">
sampling_port
</sample>
</request>
<response type="200">
<sample lang="JSON">
{
	"object": "product-type",
	"url": "/product-types/sampling_port",
	"name": "Sampling Port",
	"key": "sampling_port",
	"active": true,
	"image": null,
	"created": "11/24/2020",
	"last_updated": null
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
</api-endpoint>