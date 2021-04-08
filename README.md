[![buddy pipeline](https://app.buddy.works/schierproducts/schier-api-documentation/pipelines/pipeline/320460/badge.svg?token=d8b7cd656f6e7fbdf1dd448778018de722743797c0c4eaf4d78c7696514ffe15 "buddy pipeline")](https://app.buddy.works/schierproducts/schier-api-documentation/pipelines/pipeline/320460)

# Schier API Documentation

This website uses [VuePress](https://vuepress.vuejs.org/) to compile and render the documentation for all of Schier's various digital IP and API's.

## Installation

After cloning this repository, use either [Node Package Manager](https://www.npmjs.com/package/npm) or [Yarn](https://yarnpkg.com/) to install the necessary modules:

```bash
npm install
```

or 

```bash
yarn
```

## Development

### Run development server

Once the necessary dependencies are installed, run the following command to start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

### Writing documentation

When writing documentation, the markdown (`.md`) files will reside within the `src/` directory.

To add a new group of files, like a new topic, create a new directory and then place those files within the directory. Make sure to include an `index.md` file as this will play the roll of the route's index page; very much like that of typical server behavior (index.html, index.php, etc)

[See additional information](https://vuepress.vuejs.org/guide/directory-structure.html)

#### .vuepress directory

When writing documentation, you probably **won't need to touch this directory**. This website's configuration lives within this directory. However if you do need to change something, make sure you take care when editing this file; an error can cause the site to not load correctly.

[See additional information](https://vuepress.vuejs.org/guide/basic-config.html)

### Deployment

At the time of this writing, this website is automatically deployed to [Google's Firebase](https://firebase.google.com) via [ChipperCi](https://chipperci.com). Simply push the changes to the `master` branch and Chipper will take care of the rest.