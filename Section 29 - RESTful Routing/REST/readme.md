# RESTful Routing
Here we will learn about RESTful (REpresentational State Transfer) Routing. 
Based on web results, REST is an "architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other."
For this blog application, we will be implementing a RESTful system.
In general, the REST architectural style is such that code on the client side can be changed at any time without affecting the operation of the server. Similarly, code on the server side can be changed without affecting the operation of the client.
Additionally, RESTful systems are stateless i.e. the server does not need to know anything about what state the client is in and vice versa.

For more on REST: https://www.codecademy.com/articles/what-is-rest

## Examples (see RESTfulChart.html for a more detailed chart)
Name - Path - HTTP Verb Purpose
* Index - /dogs - GET - List all dogs
* New - /dogs/new - GET - Show new dog form
* Create - /dogs - POST - Create a new dog, then redirect somewhere
* Show - /dogs/:id - GET - Show info about one specific dog
* Edit - /dogs/:id/edit - GET - Show edit form for one dog
* Update - /dogs/:id - PUT - Update a particular dog, then redirect somewhere
* Destroy - /dogs/:id - DELETE - Delete a particular dog, then redirect somewhere