# FEC Description Service/Module

> This project displays the description of a listing similar to airbnb. It contains a whole ecosystem of a ui, server, and database.

## Related Projects

  - https://github.com/rpt26-fec-sojourner/jrudio-description-proxy
  - https://github.com/rpt26-fec-sojourner/chloe-fec-title-service
  - https://github.com/rpt26-fec-sojourner/carolyn-photos-service
  - https://github.com/rpt26-fec-sojourner/melanie-reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Notes](#notes)

## Usage

1. Install dependencies

  > npm i

2. Build the client with

  > npm run build

3. Make sure MongoDB is running

4. Seed the database if you haven't

  > npm run seed-db

5. Run the app server

  > npm start

 - or if you want to change the app port:

    > APP_PORT=7879 npm run start

## Notes:

- By default the app listens to port `7878`, but you can change it via environment variable `APP_PORT`

- By default the app tries to connect to MongoDB on `http://localhost:27017` but you can change the port if need be via environment variables as well

  - `MONGO_HOST`
  - `MONGO_PORT`

## Notes

- notes 6.13.0 or higher
- MongoDB
