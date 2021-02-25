
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
    ["workshops.html#bpb", "How to move from running 500 concurrent projects in your organization?"],
    
    //How to recruit for Agile roles?
    ["workshops.html#htrfar", "What is a competency?"],
    ["workshops.html#htrfar", "How to build a candidate's competency profile?"],
    ["workshops.html#htrfar", "What recruitment techniques can help to check a candidate's experience?"],
    ["workshops.html#htrfar", "Which recruitment techniques are ineffective and harmful?"],
    ["workshops.html#htrfar", "How to formulate proper recruitment questions?"],
    ["workshops.html#htrfar", "What is the STAR model?"],
    ["workshops.html#htrfar", "What are the advantages of internal vs. external recruiting?"],
    ["workshops.html#htrfar", "What aspects distinguish a professional recruitment process?"],

    //Fear and Anxiety in organizations
    ["workshops.html#faaio", "What are emotions and how do you categorize them?"],
    ["workshops.html#faaio", "What are typical symptoms and defense mechanisms of fear?"],
    ["workshops.html#faaio", "How to deal with anxiety?"],
    ["workshops.html#faaio", "How to help others to deal with anxiety?"],
    ["workshops.html#faaio", "How to pay attention to projective identification?"],
    ["workshops.html#faaio", "What are the system consequences of fear in the organization?"],
    ["workshops.html#faaio", "What are the approaches to prevention and intervention?"],
    ["workshops.html#faaio", "How to facilitate a reflecting group (Balint Group)?"],

    //Agile Transformation Workshop
    ["workshops.html#atw", "What are common fail patterns organizations encounter while moving towards Agile?"],
    ["workshops.html#atw", "What are the differences between various Scaling Agile and Scrum Frameworks?"],
    ["workshops.html#atw", "How to build your product with multiple Scrum Teams?"],
    ["workshops.html#atw", "What are the crucial steps in successful Agile transformation?"],
    ["workshops.html#atw", "How to provoke action on higher management?"],
    ["workshops.html#atw", "How to avoid working on different tasks than planned?"],
    ["workshops.html#atw", "How to deal with no time for improvements?"],
    ["workshops.html#atw", "How to handle integration issues?"],
    ["workshops.html#atw", "How to fight with a low bus factor?"],
    ["workshops.html#atw", "What to do with bugs no team wants to resolve?"],
    ["workshops.html#atw", "How to foster multi teams cooperation?"],

    //How to boost motivation with your Onboarding?
    ["workshops.html#onb", "What is Onboarding?"],
    ["workshops.html#onb", "What are the most important steps in Onboarding?"],
    ["workshops.html#onb", "How to build employee motivation in the first months?"],
    ["workshops.html#onb", "What onboarding techniques can help to check an employees experience?"],
    ["workshops.html#onb", "Which onboarding techniques are ineffective and harmful?"],
    ["workshops.html#onb", "How to prepare the Onboarding process and implement it?"],
    ["workshops.html#onb", "How to measure Onboarding effectiveness?"],

    //How to Offboard so that employees recommend us
    ["workshops.html#off", "What is Offboarding?"],
    ["workshops.html#off", "How to dismiss an employee from your organization?"],
    ["workshops.html#off", "What are the most important steps when Offboarding?"],
    ["workshops.html#off", "How to prepare your Exit Interview?"],
    ["workshops.html#off", "How to guide your employee during his last weeks in the company?"],
    ["workshops.html#off", "What offboarding techniques can help to check your employees experience?"],
    ["workshops.html#off", "Which offboarding techniques are ineffective and harmful?"],
    ["workshops.html#off", "How to prepare your Offboarding process and implemented it?"],

    //Feedback, why we don't like it and how to change it?
    ["workshops.html#fee", "Why feedback is so important?"],
    ["workshops.html#fee", "What is most important in feedback?"],
    ["workshops.html#fee", "Which feedback techniques can help to take care of yourself and others?"],
    ["workshops.html#fee", "Which feedback techniques are ineffective and harmful?"],
    ["workshops.html#fee", "How to prepare for feedback?"],
    ["workshops.html#fee", "What are the challenges in giving feedback?"],
    ["workshops.html#fee", "Why is experience so important?"]
   
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
