# Create Typescript Library Project

## Introduction

In you enterprise if you want to create shared javascript library then webpack and typescript comes first in mind. However, there is no sample project or example exist in google that demonstrates how to acheive it.
In this sample project I tried to demonstrate how can you create an library project using typescript and webpack and then create your own npm packages both for javascript bundle and @types bundle.
Also you will see how can you use them in your sample project.
I hope you will enjoy this project and learn something!

## Goal

This project is demonstrating how to create your own library using typescript and webpack.
Then consume that library in another webpack project.

- create a library from typescript
- create a bundle (`.js`) for javascript
- create a bundle (`.d.ts`) for definition files for typescripts
- consume library in client project by `npm link script`.

We have created 2 projects one is `lib-pj` which is library project and the other is `client-pj` which is client project that is going to consume `lib-pj`

We are using

- `webpack` for building, bundling etc.
- `ts-loader` for compiling typescript and
- `declaration-bundler-webpack-plugin` for bundling type definition files

## Tools

We are using:

- Webpack and
- Typscript

## How get this project at your machine

    # in your machine open command prompt and run below script #
    git clone https://github.com/roopkt/webpack-typesript-library-consumption-sample.git

## How to install npm packages

We want to install npm packages to both `client-pj` and `lib-pj` project. Please follow below instruction:

    # run below scripts from lib-pj folder #
    npm i

    # run below scripts from client-pj folder #
    npm i

## How to run build

We will first build `lib-pj` so that we can create output from this project.

     # go to lib-pj and run below scripts #
       npm run build

After running above build script in `lib-pj` you will see below 2 folders:

- dist Folder

  - index.js
  - index.js.map
  - package.json

- @types Folder

  - index.d.ts
  - package.json

Now build `client-pj` by running build script, which will link to above 2 npm packages.

      # go to client-pj and run below scripts
        npm run build

## How to test client project

Client Project (`client-pj`) is consuming output of Library Project (`lib-pj`)
In order to

## Questions
If you have any questions or issues or suggestions please feel free to communicate me or create issue in this git repository. 

## Releases
[See all of the releases here](
https://github.com/roopkt/webpack-typesript-library-consumption-sample/releases/)