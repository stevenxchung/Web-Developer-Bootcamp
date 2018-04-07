# YelpCamp Application v12 (Deployed)

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

# *---YelpCamp v2 Updates---*

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

# *---YelpCamp v3 Updates---*

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

# *---YelpCamp v4 Updates---*

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# *---YelpCamp v5 Updates---*

## Styling Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# *---YelpCamp v6 Updates---*

## Add User Model
* Install all packages needed for authentication
* Define User model

## Authentication Part 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Authentication Part 3 - Login
* Add login routes
* Add login template

## Authentication Part 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide authentication links correctly

## Authentication Part 5 - Show/Hide Links
* Show/hide authentication links in navbar correctly

# *---YelpCamp v7 Updates---*

## Refactor The Routes
* Use Express router to reorganize all routes

# *---YelpCamp v8 Updates---*

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# *---YelpCamp v9 Updates---*

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

# *---YelpCamp v10 Updates---*

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

# Deleting Campgrounds
* Add Destroy Route
* Add Delete button

# Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route:      <!--/campgrounds/:id/edit-->
Comment Edit Route:         <!--/campgrounds/:id/comments/:comment_id/edit-->

# Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route:   /campgrounds/:id
Comment Destroy Route:      /campgrounds/:id/comments/:comment_id

# Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

# *---YelpCamp v11 Updates---*

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

# Fullscreen Background Imagine Slider
* Use HTML and CSS to create a full screen background image slider
* Use crossfade effect to transition between images
* Use 5 images with 10 second intervals for a 50 second animation cycle

# *---YelpCamp v12 Updates---*

# Dynamic Price Feature
* Add price to campground model as a String datatype
* Add price to views/campgrounds/new.ejs and views/campgrounds/edit.ejs (new and edit forms)
* Add price to views/camprounds/show.ejs (campground show page)

# *---YelpCamp v12 (Deployed) Updates---*

# Pushing to Haroku
* Standard steps and commands to push a stable build to Heroku
	* git status
	* git add .
	* git commit -m "[updates/changes]"
	* git push heroku master

# MongoDB Deployment
* Add a database
* Add a databse user
* Configure MongoDB URI (see http://docs.mlab.com/connecting/#connect-string)
* Add MongoDB URI to Heroku via dashboard or bash commands (see https://devcenter.heroku.com/articles/mongolab)