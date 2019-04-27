# Skillific Task

```bash
git clone https://github.com/muhammadbinnaeem/skillific-task.git
```

## Node

Node 6.0.0

```bash
cd node
npm install
```

create database and edit sequelize.js for database configuration.

```bash
const database = 'skillific';
const user = 'root';
const password = '';
const host = 'localhost';
```

```bash
node app.js
```

There is no need of sql file. Running node app.js command with create table using sequelize.

open [localhost:3000](http://localhost:3000)

GET - POST route http://localhost:3000/api/notifications

## Angular

Angular 1.7.2  
Gulp 3.8.8

```bash
cd angular
npm install
gulp build // used gulp version 3.8.8
```

open index.html in dist folder
