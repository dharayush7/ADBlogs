
# ADBlogs

## Description
It is a website where user can publish blogs and also comment on the blogs. There are user authentication.

## Recuriement
 - Node JS
 - MongoDB

## Version

- Node JS - 20.14.0
- npm - 10.7.0
- MongoDB - 2.2.9



## Installation

Install and run npm package.

Make sure MongoBD run on defult port. To configure MongoDB configure go to "MongoDB configure".


Run this command to start the project for all the distribution.

```bash
  npm install 
  npm start
```
    
    
## MongoDB configure

If MongoDB throw any error, do this following steps.

### Windows
1. Make sure your MongoDB service is running. To check, visit the service console and located for MongoDB service. 
If service is inactive, click to start

2. run a command to cmd to look MongoDB url


``` bash
mongosh
```
- output

```cmd
Current Mongosh Log ID: *****
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          4.4.29
Using Mongosh:          2.2.9

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-23T10:49:58.295+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> 
```


- Hare in "Connecting to" line copy the MongoDB url from start to end of the port.

example - mongodb://127.0.0.1:27017

- Open project source code and edit the index.js

- Find 'const dburl' and paste the url in between "" section and add '/adblogs'.

example - 
```bash
const dburl =  [URL]/adblogs;
```


make sure you have no database at the name of "adblogs" on the MongoDB.


### Linux

1. Make sure your MongoDB service is running. Check with this command

```bash
sudo sysstemctl status mongod
```

- Inactive oputput:

```bash
mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; preset: enabled)
    Drop-In: /run/systemd/system/service.d
             └─zzz-lxc-service.conf
     Active: inactive (dead) since Sun 2024-06-23 10:46:00 IST; 2s ago
   Duration: 13h 16min 44.502s
       Docs: https://docs.mongodb.org/manual
    Process: 188 ExecStart=/usr/bin/mongod --config /etc/mongod.conf (code=exited, status=0/SUCCESS)
   Main PID: 188 (code=exited, status=0/SUCCESS)
   ...
```
- Acitivate oputput

```bash
mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; preset: enabled)
    Drop-In: /run/systemd/system/service.d
             └─zzz-lxc-service.conf
     Active: active (running) since Sat 2024-06-22 21:29:15 IST; 13h ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 188 (mongod)
     Memory: 88.1M
     CGroup: /system.slice/mongod.service
             └─188 /usr/bin/mongod --config /etc/mongod.conf
...
```

- If output is same as inactive, then run
```bash
sudo systemctl start mongod.service 
```

And then check status of MongoDB. MongoDB status is same as inactive oputput.

2. Run this command to get MongoDB database url


```bash
mongosh
```

- output

```bash
  Current Mongosh Log ID: *****
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          4.4.29
Using Mongosh:          2.2.9

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-23T10:49:58.295+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> 
```

- find the "Connecting to" line and copy this url from start to end of the port

example - mongodb://127.0.0.1:27017

- Now go to the source code and edit index.js .
- Now find the variable name 'dburl'.

example - 
```bash
const dburl = "[defalut-url]";
```

- Remove the dsfault url and paste this copied url in between "" and add '/adblogs'.

example - 

```bash
const dburl = "[copid-url]/adblogs"
```

- Make sure there are no database in name of adblogs in MongoDB.

### MacOS

1. Start the MongoDB service by running this command

```bash
sudo systemctl start mongod
```


2. Run this command to get MongoDB database url


```bash
mongosh
```

- output

```bash
  Current Mongosh Log ID: *****
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          4.4.29
Using Mongosh:          2.2.9

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-23T10:49:58.295+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> 
```

- find the "Connecting to" line and copy this url from start to end of the port

example - mongodb://127.0.0.1:27017

- Now go to the source code and edit index.js .
- Now find the variable name 'dburl'.

example - 
```bash
const dburl = "[defalut-url]";
```

- Remove the dsfault url and paste this copied url in between "" and add '/adblogs'.

example - 
```bash
const dburl = "[copid-url]/adblogs";
```

- Make sure there are no database in name of adblogs in MongoDB.

## Usage

Go to website by this link - 

[localhost:8000](localhost:8000)
## 🔗 Links
[portfolio](https://www.ayushdhar.com/)



## License

[MIT](https://license.ayushdhar.com/D2K1vC8ge)

