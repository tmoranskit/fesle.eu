
//var audio = new Audio('./resources/wav/click.flac');

var interval = 1000;
var myVar = setInterval(myTimer, 1000);

var chromaticScale = [
    
    '"I love how you lead the training it super and it is perfectly prepared in terms of form"',
    '"Great training, one of the best I have participated in!"',
    '"Thank you for the openness of the lecturer and nice time :)"',
    '"Great training, a lot of knowledge"',
    '"A great way to conduct online training - breakeout rooms, working together in groups. A very thoughtful way to conduct workshops. Orderly material, logically arranged. The whole thing was dynamic and very interesting. Great that there was more practice than theory."',
    '"Very positive approach, great involvement of trainers"',
    '"Interesting approach (I liked not only the good approach to recruitment, but also the part about harmful techniques)"',
    '"Great materials and tools used for training"',
    '"THANK YOU VERY MUCH <3 <3 <3 you are great!"',
    '"They should send everyone from our company to your training :)"',
    '"I like the use of mindmap to analyze the backlog. Respect for making that powerpoint. A good script."'


]

var notePool = [];
var beat = 0;

function myTimer() {
  if (beat==0) {
    let recommendations = pickANote();
    document.getElementById("recommendations").innerHTML = '<em>'+ recommendations + '</em>';
    beat = 4;
  }
  beat--;
  //document.getElementById("bar").value = beat;
  updateInterval();
}

function updateInterval()
{   
    var bpm = 30;
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
