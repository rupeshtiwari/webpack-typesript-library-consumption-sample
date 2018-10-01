# Welcome

To the project where we are demonstrating how to

- create a library from typescript
- create a bundle for javascript
- create a bundle for definition files for typescripts
- How to consume library from client project.

We have created 2 projects one is `lib-pj` which is library project and the other is `client-pj` which is client project that is going to consume `lib-pj`

We are using 
- `webpack` for building, bundling etc.
- `ts-loader` for compiling typescript and 
- `declaration-bundler-webpack-plugin` for bundling type definition files 

## How get project at local box

    # clone project #
    git clone https://github.com/roopkt/webpack-typesript-library-consumption-sample.git

## How to install npm packages

    # go to lib-pj and run below scripts #
    npm i

    # go to client-pj and run below scripts#
    npm i

## How to run project
    
    # go to lib-pj and run below scripts #
    npm run build
    cd dist
    npm link

    # go to client-pj and run below scripts#
    npm link my-lib
    npm run build
    
