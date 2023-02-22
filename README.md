# Seven peaks guardian app sample project

Live url

`https://seven-peaks-guardian.web.app/`

## Table of Contents

- [Environment Variables](#environment-variables)
- [Installation and setup](#installation)
- [Run in docker container](#docker)
- [Testing](#testing)
- [Build](#build)

## Environment Variables

The following environment variables are required to run the project, althouth env is provided by deployment env in client apps,
still this feature is added for sample and convience I have added the default key as well in authorization.
create a `.env` file in the root of project as in `.env.example` with following env variables.

| Variable Name          | Description             | Default Value                        |
| :--------------------- | :---------------------- | :----------------------------------- |
| `REACT_APP_SECRET_KEY` | Guardain api access key | cec30bc4-5b61-4f6c-8b85-81e8dcd76ad6 |

You can set these environment variables by creating a `.env` file in the root directory of the project, like this:

This will start the development server and open the app in your default browser.

## Installation and setup

To install the project, clone the repository and run the following commands:

```shell
cd seven-peaks
npm install
npm run start
```

Runs the app in the development mode.

## Run in docker container

An alternative way is to run the app in docker container

1. Clone this repository:
   `git clone https://github.com/hamidnawaz28/seven-peaks.git`
2. Build the Docker image:
   `npm run docker:build`
3. Run the Docker container:
   `npm run docker:run`
4. Open your web browser and navigate to `http://localhost:3000`to see the app.

## Testing

To run the tests, please use the following commands

`npm run test`

## Build

To create a build for production use the following code, it will create a build folder in root directory.

`npm run build`
