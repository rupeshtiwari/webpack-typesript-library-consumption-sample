# Goal

This project is demonstrating how to create your own library using typescript and webpack. 
Then consume that library in another webpack project. 

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
    cd "@types"
    npm link

    # go to client-pj and run below scripts#
    npm run build
    
