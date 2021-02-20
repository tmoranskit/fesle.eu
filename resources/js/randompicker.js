
//var audio = new Audio('./resources/wav/click.flac');

var interval = 1000;
var myVar = setInterval(myTimer, 1000);

var chromaticScale = [
    //Startup simulation for Agile Teams
    ["workshops.html#ssfat", "How to encourage people to do pair programming?"],
    ["workshops.html#ssfat", "How to run a mob programming session remotely?"],
    ["workshops.html#ssfat", "How to introduce TDD and BDD approach in your team?"],
    ["workshops.html#ssfat", "How to move from acceptance criteria towards specification by example?"],
    ["workshops.html#ssfat", "How to involve testers in the initial stages of software development?"],
    ["workshops.html#ssfat", "How to talk with users and stakeholders to uncover hidden assumptions?"],
    ["workshops.html#ssfat", "How to work online collaboratively on an outcome based product backlog?"],
    ["workshops.html#ssfat", "How to run an example mapping session remotely?"],
    ["workshops.html#ssfat", "How to document your product using live executable documentation in Gherkin?"],

    //Buisnes Product Backlog

    ["workshops.html#bpb", "What is (and what isn't) a Product Backlog?"],
    ["workshops.html#bpb", "How to build a Product Backlog to best meet its goal?"],
    ["workshops.html#bpb", "What can we put (and what shouldn't we) inside a Product Backlog?"],
    ["workshops.html#bpb", "How to define Product Backlog elements to make them valuable on their own?"],
    ["workshops.html#bpb", "What does Product Coaching mean?"],
    ["workshops.html#bpb", "How to deliver business value as early as possible?"],
    ["workshops.html#bpb", "Who and how is responsible for the Product Backlog on different levels?"],
    ["workshops.html#bpb", "How to order a Product Backlog while working with stakeholders and development teams?"],
    ["workshops.html#bpb", "How to move from running 500 concurrent projects in your organization?"]
    

]

var notePool = [];
var beat = 2;

function myTimer() {
  if (beat==0) {
    let questionPicked = pickANote();
    document.getElementById("questionlink").setAttribute('href',  questionPicked[0]); 
    document.getElementById("questionlink").innerHTML =  questionPicked[1];
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
