
var express = require("express");
var apiRouter = express.Router();

var friendsData = require("../data/friends");

// API GET Requests and Response back a JSON array of objects
apiRouter.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the JavaScript array
apiRouter.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    
    //Loop through newFriend scores and convert 
    //"1 (Strongly Disagree)" and "5 (Strongly Agree)" to 1 and 5 respectively
    newFriend.scores.forEach(function(score) {
      if (score.scores == "1 (Strongly Disagree)") {
        score.scores = 1;
      }
      else if (score.scores == "5 (Strongly Agree)") {
        score.scores = 5;
      }
      else {
        score.scores = parseInt(score.scores);
      }
    });//End for loop

    //Find Best Match Friend Code Below
    var bestMatch = {};
    var matchedFriend = 0;
    //Maximum different score for ten questions is 40 (40 = 10 questions x 4 <different between 5 and 1 choices>). 
    //This number is difference based on number of questions and choices of answers
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

    //bestMatch found
    bestMatch = friendsData[matchedFriend];
    //Push new friend to friends array
    friendsData.push(newFriend);
    //Return best match friend
    res.json(bestMatch);
});


 module.exports = apiRouter;
