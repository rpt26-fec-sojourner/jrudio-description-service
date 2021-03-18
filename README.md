# FEC Description Service/Module

> This project displays the description of a listing similar to airbnb. It contains a whole ecosystem of a ui, server, and database.

## Related Projects

  - https://github.com/rpt26-fec-sojourner/jrudio-description-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)

## Usage

- Install dependencies

  > npm i

- Make sure MongoDB is running

- npm start to run the app server

- By default the app listens to port `7878`, but you can change it via environment variable `APP_PORT`

- By default the app tries to connect to mongo on `http://localhost:27017` but you can change the port if need be via environment variables as well

  - `MONGO_HOST`
  - `MONGO_PORT`

To start

> npm start

or if you want to change the app port:

> APP_PORT=7879 npm run start

## Requirements

- Node 6.13.0
- MongoDB
