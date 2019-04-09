# FriendFinder using Node JS, Express JS and Heroku Server
This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 
## Home Page
![Image of Home Page](https://github.com/rnguyen05/FriendFinder/blob/master/screenshots/homepage.jpg?raw=true)
## Survey
![Image of Survey](https://github.com/rnguyen05/FriendFinder/blob/master/screenshots/survey.png?raw=true)

## Technologies Used
* Javascript
* Node JS
* Express JS
* AJAX
* jQuery

## npm modules used
* express
* body-parse
* path

## Vital App Code
```javascript
    //Find Best Match Friend Code Below
    var bestMatch = {};
    var matchedFriend = 0;
    //Maximum scores for ten questions is 40 (40 = 10 questions x 4 <different between 5 and 1 choices>). 
    //This number is change based on number of questions and choices of answers
    var bestMatchedScore = 40;

    //Loop through all friends array
    for (var friend = 0; friend < friendsData.length; friend++) {
      var totalScoresDiff = 0;
      //Loop through individual's friend scores
      for (var score = 0; score < friendsData[friend].scores.length; score++) {
        var diff = Math.abs(friendsData[friend].scores[score] - newFriend.scores[score]);
        totalScoresDiff += diff;
      }//End of inner loop
      //Console log to check if app gives accurate result.
      console.log(totalScoresDiff, friendsData[friend].name);
      
      if (totalScoresDiff < bestMatchedScore) {
        matchedFriend = friend;
        bestMatchedScore = totalScoresDiff;
      }
    }//End of outter loop
```

## Getting Started
* Locally: Clone GitHub repository, run npm install, then run node server.js in the terminal. Copy localhost:3001 and paste in browser to see app.
* Run on Heroku server: https://friend-match2019.herokuapp.com/

