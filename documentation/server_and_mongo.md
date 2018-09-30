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
