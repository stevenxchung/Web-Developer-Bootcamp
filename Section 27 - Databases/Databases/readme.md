# MongoDB installation

## Initial Setup
* We will be working with Mongo 3.6.2 or newer, to check your version type: mongo --version into the terminal
* To get MongoDB working we will need to type the following into the terminal:
    * sudo apt-get install -y mongodb-org
* Type cd into the terminal and hit enter to go into the root ~ directory
* Enter the following:
    * mkdir data
    * echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
    * chmod a+x mongod
* To run mongod we need to cd into the root ~ and then run ./mongod

## For more information on setting up MongoDB:
* Visit the following: https://community.c9.io/t/setting-up-mongodb/1717