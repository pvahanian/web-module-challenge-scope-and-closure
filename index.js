// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {


  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  count is delcared within the function "counterMaker" and cant be accessed again.  Counter2
 * its declared outside the function so you can run multiple times and continue to change the value of count.
 * 2. Which of the two uses a closure? How can you tell?
 * the second one.  reaches outside its scope to find count because it doesn't exist inside of return count.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *When you dont want the variable to be accessed or modified outside of the function.  When you might need that varible or function again.  Like an on going global count.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor((Math.random() * 2) + 1);

}

//console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, innings){
  let score={
    "Home": 0,
    "Away": 0,
  };
  for(let x=0;x<=innings;x++){
    score.Home+=inning();
    score.Away+=inning();
  }
  return score;
}

//console.log(finalScore(inning,9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

let awayTotal=0;
let homeTotal=0;
let inningScore=[];

function scoreboard(getInningScore,inning,numInnings) {
  let currentInning=0;
  for(let x=0;x<numInnings;x++){
    let awayTeam=0;
    let homeTeam=0;
    currentInning++;
    awayTeam+=inning();
    homeTeam+=inning();
    inningScore.push(getInningScore(awayTeam,homeTeam));
    console.log(`${currentInning}st inning: awayTeam ${inningScore[x][0]} - homeTeam ${inningScore[x][1]}`);
    awayTotal+=inningScore[x][0];
    homeTotal+=inningScore[x][1];
  }
  console.log(`Final Score: awayTeam ${awayTotal} - homeTeam ${homeTotal}`);
}


function getInningScore(awayTeam,homeTeam){
  let inningScore=[awayTeam,homeTeam];
  return (inningScore);
}

scoreboard(getInningScore,inning,9);
