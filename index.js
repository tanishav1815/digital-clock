


function displayTime(){
    var dateTime =new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('setHalf');
    var greeting = document.getElementById("greet1");
    var img = document.getElementById("img");
    var task = document.getElementById("task");

    if(hrs >= 12){
        setHalf.innerText = "PM";
    }
    else{
        setHalf.innerText = "AM";
    }
    
    document.getElementById('hrs').innerText = hrs;
    document.getElementById('mins').innerText = min;
    document.getElementById('secs').innerText = sec;

    // greetings

    if(hrs < 12){
        greet1.innerText = "GOOD MORNING!! WAKE UP!!";
        task.innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
    }   
    if(hrs >= 12  && hrs <= 16){
        greet1.innerText = "GOOD AFTERNOON!!";
        task.innerText = "LET'S HAVE SOME LUNCH!!";

    }
    if(hrs>=16 && hrs <=20){
        greet1.innerText = "GOOD EVENING!!";
        task.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";

    }
    if(hrs>=21 && hrs <=24){
        greet1.innerText = "GOOD NIGHT!!";
        task.innerText = "CLOSE YOUR EYES AND GO TO SLEEP.";

    }

}
setInterval(displayTime, 10);


function changetext()
{
    document.getElementById("yes").innerText="Party Time";
}
function original()
{
    document.getElementById("yes").innerText="Set Alarm";
}

function func1() {
    let d  = document.getElementById("wake-up");
    let dtext = d.options[d.selectedIndex].text;
    document.getElementById("print").innerText = dtext;
}

function func2(){
    let s = document.getElementById("lunch-time");
let stext = s.options[s.selectedIndex].text;
    document.getElementById("print1").innerText = stext;
}

function func3(){
    let s = document.getElementById("nap");
let stext = s.options[s.selectedIndex].text;
    document.getElementById("print2").innerText = stext;
}

function func4(){
    let s = document.getElementById("night");
let stext = s.options[s.selectedIndex].text;
    document.getElementById("print3").innerText = stext;
}