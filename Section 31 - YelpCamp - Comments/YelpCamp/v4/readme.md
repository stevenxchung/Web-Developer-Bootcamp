# YelpCamp Application v4

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

# *~YelpCamp v2 Changes~*

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

# *~YelpCamp v3 Changes~*

## Refactor Mongoose Code
* Create a models directory
* Use model.exports
* Require everything correctly

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model
* Make our errors go away
* Display comments on campground show page

# *~YelpCamp v4 Changes~*

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form