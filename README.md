# todo:
- find how to publish individual packages
- find how to pack entire monorepo
- investigate nextjs to compare server side rendering with vite.
- https://stackoverflow.blog/2022/11/16/biometric-authentication-for-web-devs/
    - https://webauthn.guide/
- investigate to publish packages to individual containers in docker hub
    - autobuilt yaml file for each package
    - & run the container
- investigate how to autoscale the docker containers
    - how to determine if an increase is neede
    - how to determine if a decrease is needed
- setup branch for every package
- find how to automatically copy a commit to a branch based on the package name in the commit
# remod:
- make shared libs for components to use for serveral frontend apps 
    @Silassentinel/frontEndLib
    @Silassentinel/frontEndLib/Components
    @Silassentinel/frontEndLib/Components/etc

------------------

statusses:

[![CodeQL](https://github.com/Silassentinel/MonoRepo/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/Silassentinel/MonoRepo/actions/workflows/codeql.yml)

[![njsscan sarif](https://github.com/Silassentinel/MonoRepo/actions/workflows/njsscan.yml/badge.svg?branch=main)](https://github.com/Silassentinel/MonoRepo/actions/workflows/njsscan.yml)


------------------


# Introduction 
This project is a monorepo written in typescript.

# Getting Started
Follow the steps below to install the project locally.
Prerequisite:
- Install Node.js and npm
- Download the project
-- via git or as a zip


1.	Installation process:
    1. CD into project root
    1. Run `npm install`
2.	Software dependencies
    1. Can be found in the packages file.
3.	Latest releases
4.	API references

# Build and Test
1. Build
1.1. Run `npm run build`
2. Test
2.1. Run `npm run test`

# Contribute
To contribute to the project, you can fork the project and make a pull request.

# License
