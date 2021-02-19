
//var audio = new Audio('./resources/wav/click.flac');

var interval = 1000;
var myVar = setInterval(myTimer, 1000);

var chromaticScale = [
    "How to encourage people to do pair programming?",
    "How to run a mob programming session remotely?",
    "How to introduce TDD and BDD approach in your team?",
    "How to move from acceptance criteria towards specification by example?",
    "How to involve testers in the initial stages of software development and be like the ​​three amigos?",
    "How to talk with users and stakeholders to uncover hidden assumptions?",
    "How to work online collaboratively on an outcome based product backlog?",
    "How to run an example mapping session remotely  and create a sprint backlog with examples and wireframes?",
    "How to document your product using live executable documentation in Gherkin?"
]

var notePool = [];
var beat = 4;

function myTimer() {
  if (beat==0) {
    document.getElementById("questionlink").innerHTML  = pickANote();
    beat = 4;
  }
  beat--;
  document.getElementById("bar").value = beat;
  updateInterval();
}

function updateInterval()
{   
    var bpm = 50;
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
