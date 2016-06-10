# I know what you will do this summer
##Project team:
* [Omar Alvarez](https://github.com/omajul85)
* [Sergio Enrech Trillo](https://github.com/tigretoncio)
* [Max Provin](https://github.com/maxprovin)
* [Ben Stein](https://github.com/bpstein)

(Idea from [Ollie Haydon-Mulligan](https://github.com/ollieh-m))

## Project description
I know what you'll do this summer is a single page application made in Angular.  The user has an option to select its type of ideal holiday based on a number of holiday categories, and the app suggests interesting locations to visit. Also, the user is able to search for any type of activities and resources due to the integration with the Yelp API.  Finally when the user types a location, they automatically get the tempeture and current weather forecast.

## Deployed project
Project is [deployed in Heroku](https://holiday-planner.herokuapp.com)

## Technologies
The following technologies have been used:
* Angular 1.5.6
* Oauth 1.0a
* JavaScript OAuth 1.0a signature generator (RFC 5849) ([Marco Bettiolo](https://github.com/bettiolo))
* Bootstrap 3.3.6
* JQuery 1.12.2
* Express 4.13.4 (for Heroku deployment)

## APIs used
* Yelp (Resource finder)
* Wunderground (Weather information)
* Suggestion holiday (powered by Max! :) - [available here](https://holiday-info-baby.herokuapp.com)


## Technical Challenges
* __Oauth implementation:__  Implementing the relevant paramenters took a big chunk of time and resources of the team. A quite interesting problem as the security features that API providers implement in order to avoid flood attacks means the every time a request is generated it must be unique.  Apart from identifying with the relevant tokens, every request must change implementing a "nonce" field that is a random string sequence, and a timestamp.  It was our first attempt to Oauth challenges and the team pulled together to resolve quite complex challenges that appeared as unresolved in StackOverflow, quite an achievement...

* __Bootstrap and styling:__ It can be sometimes frustrating when the input field resists being centered, even if you try tens of different tricks... We acknowledge now that placing things in a screen in a nice way is an art!

* __Heroku deployment__: The deployment of single applications into Heroku like Angular is a challenge in itself, with the increased complication that there are very little references in Internet to find your way out.  The team was very proud to surmount the technical challenges in deploying and have the app available in Heroku in the third day of project development.

## Successes
* Integration and use of 3 APIs, one of them created by the team
* Implementation of Oauth to make queries to Yelp
* Weather integration
* Responsiveness of the webpage for browsers and mobile devices
* Deployment in Heroku

## Pending items
* Increase test coverage
* Improve refactoring
 
## General comment and reflection
This project has been created as a result of the Makersthon exercise in week 9 of Makers Academy bootcamp program, (Apr-16 cohort).  The whole team generated ideas that were voted and Makers created selections of teams to work on different projects based on student's votes.  This was one of the projects chosen and we were assigned to it.

The project was started from scratch, design and implementation and deployment taking a bit less than 4 days of intense work.  

In the design it was recognised that there was not any need to use any backend platform, as we were just creating a "one page" frontend app, and therefore Angular was selected as the technology to use.  We chose the APIs to use and started diving into the documentation, as we had never used them before.  We did not have any experience in Oauth either, so it was a steep learning curve.

We used an agile methodology and quickly recognised that with our level of experience we would need to "spike" the development, and the team, a bit reluctantly, agreed to work that way.  As strong advocates of TDD methodologies, we understood that this was a "one-off" to gain insight on a number of technologies, so we could then start from scratch in the right way.

The team has worked together in a very effective way.  We have worked in pairs and rotating members, every getting involved in the areas we liked, and reviewing other's work to understand what they were doing. Everyone in the team has made capital contributions, and the result is very satisfactory.  We are proud of our work.

At the same time, it has been lots of fun.  Nothing is probably more satisfying than to resolve a particularly complex challenge, kick and scream for 5 minutes out of pure joy, (like Cristiano Ronaldo scoring the goal that means a Champions league), and then call for an "emergency meeting" with the other half of the team to explain them that the project is a disaster and that we need to change everything and introduce Rails into the equation, (Sorry Ben and Max but we couldn't resist :) )

##Special thanks to...
* _Ben_, for patiently making all the requested changes for CSS styling, and rounding the pictures and making it looking all very nice!
* _Max_, for creating his holiday-info-baby nice API and storing it in Heroku, and then driving the integration of the holiday suggestions into the web
* _Omar_, for resolving problems that a whole bunch of people would struggle to resolve in months, in a couple of hours of mmmmms, erghrrs, and ahhhs!!!   (Qué bueno eres carajo! :)
* _Sergio_, for ordering tea with milk and sugar from the rest of the team, making bad jokes about broken software, creating supernatural bugs due to the most silly mistakes, and in some cases even resolving those bugs!

