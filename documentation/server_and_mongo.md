## Extra Notes (dump)
https://mongoosejs.com/docs/connections.html
https://stackoverflow.com/questions/13339695/nodejs-w-express-error-cannot-get
https://stackoverflow.com/questions/39599063/check-if-mongodb-is-connected
https://appdividend.com/2017/06/28/mern-stack-tutorial/
https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/
https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm
https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
https://codeburst.io/hitchhikers-guide-to-back-end-development-with-examples-3f97c70e0073


## Server
# Running the server
# navigate to /server
npm start
# navigate to localhost:4200 on chrome
# try calling localhost:4200/api/characters
# try calling localhost:4200/api/characters/get/<supply_id>



## Mongo DB
# Enable to fork mongo b conneciton
mongod

# Start mongo db connection
mongo

# create react-home database
use react-home

# create a new collection (table)
db.createCollection("characters")

# insert data into characters collection
db.characters.insert({"name":"Squig Sleevily", "race":"half-elf", "class":"paladin"})
db.characters.insert({"name":"Armor Two", "race":"human", "class":"forge cleric"})
