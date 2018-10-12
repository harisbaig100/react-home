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

## Install Mongo DB


## Mongo DB
Open the Terminal app and type `brew update`.
After updating Homebrew `brew install mongodb`
After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running `mkdir -p /data/db`


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

# install heroku
brew install heroku/brew/heroku
heroku create react-home
git push heroku master

# heroku workflow
git push heroku master

# check for heroku url
heroku apps:info

# current heroku url
https://react-home.herokuapp.com/

# mongo in heroku using mlab
https://devcenter.heroku.com/articles/mongolab
heroku addons:create mongolab:sandbox

## Created mongolab-animate-76603

# view app’s config variables
heroku config:get MONGODB_URI

# format of app config
mongodb://dbuser:dbpass@host:port/dbname

# mongo interactive shell
~~~~
% mongo ds012345.mlab.com:56789/dbname -u dbuser -p dbpassword
MongoDB shell version: 3.4.7
connecting to: ds012345.mlab.com:56789/dbname
> 
~~~~

% mongo ds012345.mlab.com:56789/heroku_cpjkgc0f -u heroku_cpjkgc0f -p kpj2oal3rfn84kvh961uk05kj8