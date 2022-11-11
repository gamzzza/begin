const clock = document.querySelector("#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0") ;
    const seconds = String(date.getSeconds()).padStart(2,"0") ;

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


//  function getTime(){
//     const date = new Date();
//     const formatMinutes = ("0"+date.getMinutes()).slice(-2);
//     const formatSeconds = ("0"+date.getSeconds()).slice(-2);

//     clock.innerText = `${date.getHours()}:${formatMinutes}:${formatSeconds}`;
    
// }

// function localTime(){
//     clock.innerText = new Date().toLocaleTimeString();
// }

getClock();
setInterval(getClock,1000);