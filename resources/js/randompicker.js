
//var audio = new Audio('./resources/wav/click.flac');

var interval = 1000;
var myVar = setInterval(myTimer, 1000);

var chromaticScale = [
    //Startup simulation for Agile Teams
    "How to encourage people to do pair programming?",
    "How to run a mob programming session remotely?",
    "How to introduce TDD and BDD approach in your team?",
    "How to move from acceptance criteria towards specification by example?",
    "How to involve testers in the initial stages of software development?",
    "How to talk with users and stakeholders to uncover hidden assumptions?",
    "How to work online collaboratively on an outcome based product backlog?",
    "How to run an example mapping session remotely?",
    "How to document your product using live executable documentation in Gherkin?",

    //Buisnes Product Backlog

    "What is (and what isn't) a Product Backlog?",
    "How to build a Product Backlog to best meet its goal?",
    "What can we put (and what shouldn't we) inside a Product Backlog?",
    "How to define Product Backlog elements to make them valuable on their own?",
    "What does Product Coaching mean?",
    "How to deliver business value as early as possible?",
    "Who and how is responsible for the Product Backlog on different levels?",
    "How to order a Product Backlog while working with stakeholders and development teams?",
    "How to move from running 500 concurrent projects in your organization?"
    

]

var notePool = [];
var beat = 2;

function myTimer() {
  if (beat==0) {
    document.getElementById("questionlink").innerHTML  = pickANote();
    beat = 4;
  }
  beat--;
  //document.getElementById("bar").value = beat;
  updateInterval();
}

function updateInterval()
{   
    var bpm = 60;
    var newInterval = Math.round(1000*60/bpm);
 
    if ((bpm >= 10)&&(bpm <= 400)) {      
  
        if (newInterval != interval) {
            interval = newInterval;
            clearInterval(myVar);
            myVar = setInterval(myTimer, interval);
        }
    }
}

function pickANote () {
  
    if (notePool.length ==0) {
        notePool = [...chromaticScale];
        shuffleArray(notePool);
    }
    return notePool.pop();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
