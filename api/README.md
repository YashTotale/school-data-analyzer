# School Data API

## Setup

### Install Postgres

```shell
$ brew install postgresql
$ brew services start postgresql
```

### Create a local DB

1. Connect to Postgres

   ```shell
   psql postgres
   ```

2. Create a user

   ```postgres
   postgres=> CREATE ROLE <username> WITH LOGIN PASSWORD '<password>';
   postgres=> ALTER ROLE <username> CREATEDB;
   postgres=> \q
   ```

3. Create a database

   First, connect with the user you just created

   ```shell
   psql -d postgres -U <username>
   ```

   Then, create a database (recommended db_name is `schooldata`)

   ```postgres
    postgres=> CREATE DATABASE <db_name>;
    postgres=> \c <db_name>
   ```

4. Add values to `.env` in `api`

   ```text
   PG_USER=<username>
   PG_PASSWORD=<password>
   DB_NAME=db_name
   ```
