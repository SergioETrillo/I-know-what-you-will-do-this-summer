# I know what you will do this summer
##Project team:
* [Omar Alvarez](https://github.com/omajul85)
* [Sergio Enrech Trillo](https://github.com/tigretoncio)
* [Max Provin](https://github.com/maxprovin)
* [Ben Stein](https://github.com/bpstein)

(Idea from [Ollie Haydon-Mulligan](https://github.com/ollieh-m))

## Project description
I know what you'll do this summer is a single page application made in Angular.  The user has an option to select its type of ideal holiday, and the app suggests interesting locations to visit. Also, the user is able to search for any type of activities and resources due to the integration with the Yelp API.  Weather temperature is also provided.

## Deployed project
Project is [deployed in Heroku](https://holiday-planner.herokuapp.com)

## Technologies
The following technologies have been used:
* Angular 1.5.6
* Oauth 1.0a
* JavaScript OAuth 1.0a signature generator (RFC 5849) ([Marco Bettiolo](https://github.com/bettiolo))
* Bootstrap
* JQuery
* Express 4.13.4 (for Heroku deployment)

## APIs used
* Yelp (Resource finder)
* Wunderground (Weather information)


## Technical Challenges
* __Oauth implementation:__  Implementing the relevant paramenters took a big chunk of time and resources of the team. A quite interesting problem as the security features that API providers implement in order to avoid flood attacks means the every time a request is generated it must be unique.  Apart from identifying with the relevant tokens, every request must change implementing a "nonce" field that is a random string sequence, and a timestamp.  It was our first attempt to Oauth challenges and the team pulled together to resolve quite complex challenges that appeared as unresolved in StackOverflow, quite an achievement...

* __Bootstrap and styling:__ It can be sometimes frustrating when the input field resists being centered, even if you try tens of different tricks... We acknowledge now that placing things in a screen in a nice way is an art!

* __Heroku deployment__: The deployment of single applications into Heroku like Angular is a challenge in itself, with the increased complication that there are very little references in Internet to find your way out.  The team was very proud to surmount the technical challenges in deploying and have the app available in Heroku in the third day of project development.

## Pending items
* Increase test coverage
* Ensure smooth display in mobile devices
* Improve refactoring
 
## General comment and reflection
This project has been created as a result of the Makersthon exercise in week 9 of Makers Academy bootcamp program, (Apr-16 cohort).  The whole team generated ideas that were voted and Makers created selections of teams to work on different projects based on student's votes.  This was one of the projects chosen and we were assigned to it.

The project was started from scratch, design and implementation and deployment taking a bit less than 4 days of intense work.  

In the design it was recognised that there was not any need to use any backend platform, as we were just creating a "one page" frontend app, and therefore Angular was selected as the technology to use.  We chose the APIs to use and started diving into the documentation, as we had never used them before.  We did not have any experience in Oauth either, so it was a steep learning curve.

We used an agile methodology and quickly recognised that with our level of experience we would need to "spike" the development, and the team, a bit reluctantly, agreed to work that way.  As strong advocates of TDD methodologies, we understood that this was a "one-off" to gain insight on a number of technologies, so we could then start from scratch in the right way.

The team has worked together in a very effective way.  We have worked in pairs and rotating members, every getting involved in the areas we liked, and reviewing other's work to understand what they were doing. Everyone in the team has made capital contributions, and the result is very satisfactory.  We are proud of our work.

At the same time, it has been lots of fun.  Nothing is probably more satisfying thanto resolve a particularly complex challenge, kick and scream for 5 minutes out of pure joy, (like Cristiano Ronaldo scoring the goal that means a Champions league), and then call an "emergency meeting" with the other half of the team to explain them that the project is a disaster and that we need to change quickly the technology and introduce Rails into the equation, (Sorry Ben and Max but we couldn't resist :) )
