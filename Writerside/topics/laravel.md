# For Laravel Applications

Use this documentation to leverage the Laravel-specific features of this package. 

## Setup

See below on how to configure the SDK to work with your Laravel installation.

### Configuration

To set the API key that this package uses to authenticate your requests, add the following entry to your app's environment files:

```Bash
SCHIER_API_KEY=<YOUR API KEY>
```

#### Other Environment Variables

{type="full"}
SCHIER_API_BASE
: If you are trying to connect to another environment other than the default production environment, define the base here. **FOR TESTING ONLY!!!**

SCHIER_API_BASE
: Schier will always use the most recent version of the API. However, if you are trying to connect to an older version, define it here.

### Package Auto-Discovery

Since this package has a minimum Laravel dependency version of `8.*`, if you are using this package in a Laravel application, you should not have to register this package's service provider.

If you are for some reason *not using auto-discovery,* add the following code to your `config/app.php` file:

```PHP
'providers' => [
    // Other service providers
    SchierProducts\SchierProductApi\SchierProductApiServiceProvider::class, <-- // Add it here
],
```

### Using the Facade

If you want to use the facade to quickly access the API, add the following code to your facades within the `config/app.php` file:

```PHP
'aliases' => Facade::defaultAliases()->merge([
    // Other facades
    'SchierApi' => SchierProducts\SchierProductApi\Facades\SchierApi::class, <-- // Add it here
])->toArray(),
```

#### Publish the package's settings to your application

This will publish this package's configuration file `schier-api.php` to your application's `config` directory.

```Bash
php artisan vendor:publish --provider="SchierProducts\SchierProductApi\SchierProductApiServiceProvider"
```