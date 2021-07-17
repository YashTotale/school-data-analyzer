# School Data Notebooks <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Begin](#begin)
  - [Create a virtual environment](#create-a-virtual-environment)
  - [Install dependencies](#install-dependencies)
  - [Create `.env`](#create-env)
  - [Run the Python Notebook](#run-the-python-notebook)

## Setup

### Prerequisites

1. [Python 3](https://www.python.org/), version `>=3.8.x`
2. [Pip 3](https://pip.pypa.io/), version `>=21.x`

### Begin

1. Follow the initial setup steps in the [root README.md file](/README.md#setup)
2. Follow the API setup steps in the [api README.md file](/api/README.md#setup)
3. Change directories to `notebooks`

   ```shell
   $ cd notebooks
   ```

### Create a virtual environment

```shell
$ python3 -m venv venv
$ source venv/bin/activate
```

### Install dependencies

```shell
$ pip3 install -r requirements.txt
```

### Create `.env`

**Make sure you have completed the [API setup](/api/README.md#setup)!**

```text
PG_USERNAME=<username>
PG_PASSWORD=<password>
DB_NAME=<db_name>
```

### Run the Python Notebook

```shell
$ jupyter nbconvert --to python --execute export_to_db.ipynb
```
