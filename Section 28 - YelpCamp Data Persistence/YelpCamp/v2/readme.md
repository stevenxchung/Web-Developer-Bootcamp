# YelpCamp Application v2

## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each campground has:
* Name
* Image

## Layout and Basic Styling
* Create our header and footer partials in views/partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form 
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

For YelpCamp to function properly, MongoDB needs to be installed

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

# YelpCamp Build Continued...

## Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template