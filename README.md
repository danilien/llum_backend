# Llum 2021 app service

## Description

Llum 2021 App service using [Nest](https://github.com/nestjs/nest) TypeScript framework. 

The docker app listens requests on port 3000.

## Installation

```bash
$ npm install
```

## Configuration

Configure the environment variables in docker-compose.yml file for the app to correctly connect to the DB:

```
TYPEORM_HOST={MYSQL_DB_HOST}
TYPEORM_PORT={MYSQL_DB_PORT}
TYPEORM_USERNAME={MYSQL_DB_USER}
TYPEORM_PASSWORD={MYSQL_DB_PASSWORD}
TYPEORM_DATABASE={{MYSQL_DB_SCHEMA}}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# running with docker compose
$ docker-compose up
```
