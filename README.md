# MongoDB Wrapper
Very simple API wrapper around MongoDB written in NodeJS, exposing any query via a POST request.

*DO NOT USE IN SECURE PRODUCTION ENVIRONMENTS!*

## Usage

### Install dependencies

    npm install

### Run

    MONGO_URI='mongodb://127.0.0.1:27017/my-db' node app.js

### Query

    curl --data "query=db.users.insert({name: 'Goofy'})" http://localhost:3000

Note that you'll need to call "toArray" on queries that normally return a cursor object

    curl --data "query=db.users.find().toArray()" http://localhost:3000
