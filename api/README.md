# School Data API <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Begin](#begin)
  - [Connect to Postgres](#connect-to-postgres)
  - [Create a user](#create-a-user)
  - [Create a database](#create-a-database)
  - [Create `.env`](#create-env)

## Setup

### Prerequisites

1. [Postgres](https://www.postgresql.org/), version `>=13.x`

   ```shell
   $ brew install postgresql
   $ brew services start postgresql
   ```

### Begin

1. Follow the initial setup steps in the [root README.md file](/README.md#setup)
2. Change directories to `api`

   ```shell
   cd api
   ```

### Connect to Postgres

```shell
psql postgres
```

### Create a user

```postgres
postgres=> CREATE ROLE <username> WITH LOGIN PASSWORD '<password>';
postgres=> ALTER ROLE <username> CREATEDB;
postgres=> \q
```

### Create a database

1. First, connect with the user you just created

   ```shell
   psql -d postgres -U <username>
   ```

2. Then, create a database (recommended db_name is `schooldata`)

   ```postgres
    postgres=> CREATE DATABASE <db_name>;
    postgres=> \c <db_name>
   ```

### Create `.env`

```text
PG_USER=<username>
PG_PASSWORD=<password>
DB_NAME=db_name
```
