// writing the function to generate realtime

function realTimeClock () {

// using setInterval to call function repeatedly
    setInterval (function(){

// geting the current time

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

// // setting am and pm

//         let amPm = (hours >= 12) ? "PM" : "AM";

// // converting to 12-hour format

//         hours = (hours > 12) ? (hours - 12) : hours;

// adding zero to time to make it look better

        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);

// changing backgound colour 
            if( hours >= 06 && hours < 15 ){
                document.querySelector("body").style.backgroundColor = "#1d8ee2";
            }

            else if( hours >= 15 && hours < 18){
                document.querySelector("body").style.backgroundColor = "#f8b195";
            }
            
            else if ( hours >= 18 && hours < 24){
                
                document.querySelector("body").style.backgroundColor = "#355c7d";
                document.querySelector("h1").style.color = "white";
            }

            else if ( hours >= 00 && hours < 06){
                
                document.querySelector("body").style.backgroundColor = "#355c7d";
                document.querySelector("h1").style.color = "white";
            }

// displaying time 

        let time = hours + " : " + minutes + " : " + seconds;

        document.getElementById("clock").innerHTML = time;

    }, 1000)
}

// switch