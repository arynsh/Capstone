# Wildlife Tracker
#### A app that allows users to log wildlife sightings into a database and view all sightings in their general area.

#### By **Sharon Lee**
## 🎉 Contents

* [Description](#description)
* [Specifications](#specifications)
* [Instructions](#instructions)
* [Contact](#contact)
* [License](#license)

### Description
This is a app that allows users to create logs of wildlife sightings (species, time, date, description, image) and add those logs to a map of all wildlife sightings in their area. The user will be able to choose to view either all logs near their gps location or input an address. The MVP (minimum viable product) consists of the previous mentioned functionality. Further functionality will consist of
 1) being able to filter results (on map) based on species, rating, date, and species+location 
 2) creating an API for other developers to use the data 
 3) adding an upvote/downvote to logs 
 4) adding a rating system for species(endangered, dangerous, or hurt animals). 
 5) user authentication will be implemented to allow users to create accounts/sign in/sign out and view their log history.

### Specifications
| Spec | Input | Output |
| :-------------     | :------------ | :------------- |
| Homepage | User accesses:http://localhost:8000/| Homepage w/map displaying their gps location |
| **User clicks create new sighting| http://localhost:8080/#/NewLog | User can fill out a form on the page |
| **User submits form for new sighting | http://localhost:8080/#/NewLog | Form is submitted into database and page shows "thank you for creating a new submission" |

### Component Structure
```
App (state -> NewLogControl -> NewLogForm)
└── Header          
└── Switch
    └── Home
    └── About Us
    └── Log List
    |     └── Log (state)
    └── NewLogControl (state)
    |    └── Confirmation Question    
    |    └── NewLogForm
    └── Error 404
```

### Instructions

1. Clone this repository: https://github.com/arynsh/react-wildlife-tracker
```
$ git clone https://github.com/arynsh/react-wildlife-tracker
```
2. Navigate into the repository
```
$ cd react-wildlife-tracker
```
3. In the command line, type in "npm install" or "npm i" then "npm run start".
```
$ npm i
```
```
$ npm run start
```
4. On your browser, open http://localhost:8000/#


### Known Bugs
* No known bugs at this time.

## 📋 Technologies Requirements
 You may use Windows, macOS, or Linux as your development operating system, though building and running apps may be limited.
 Tools used:  
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Visual Studio](https://www.visualstudiocommunity.com)
* [GitHub](https://www.github.com)
* HTML
* CSS
 
### Support and Contact details
| Author | GitHub | Email |
|--------|:------:|:-----:|
Sharon Lee| [arynsh](https://github.com/arynsh) |  [sharonlee714@gmail.com](mailto:sharonlee714@gmail.com) 

_Please contact with questions and/or comments._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Sharon Lee**