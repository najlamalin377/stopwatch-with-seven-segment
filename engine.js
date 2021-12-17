let startTimer;

var x = 0;
var hour, minute, second;

const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {

    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        x++;

        x = parseInt(x, 10); // convert value to number if it's string
        let hour = Math.floor(x / 3600); // get hour
        let minute = Math.floor((x - (hour * 3600)) / 36); // get minute
        let second = x - (hour * 3600) - (minute * 36); //  get second

        // add 0 if value < 10; Example: 2 => 02
        if (hour < 10) { hour = "0" + hour; }
        if (minute < 10) { minute = "0" + minute; }
        if (second < 10) { second = "0" + second; }

        hour = hour.toString();
        minute = minute.toString();
        second = second.toString();
        
        //check data dekat console (F12)
        console.log(hour + minute + ':' + second );

        //display no dekat 7-segment digital
        document.getElementById("hour-1").setAttribute("class", "num-" + hour.substr(1));
        document.getElementById("minute-1").setAttribute("class", "num-" + minute.substr(0, 1));
        document.getElementById("minute-2").setAttribute("class", "num-" + minute.substr(1, 1));
        document.getElementById("second-1").setAttribute("class", "num-" + second.substr(0, 1));
        document.getElementById("second-2").setAttribute("class", "num-" + second.substr(1, 1));

    }, 10); //1000ms = 1s
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);

    putValueReset();
}


function putValueReset() {

    // setkan 7-segment kepada kosong semua
    document.getElementById("hour-1").setAttribute("class", "num-0");
    document.getElementById("minute-1").setAttribute("class", "num-0");
    document.getElementById("minute-2").setAttribute("class", "num-0");
    document.getElementById("second-1").setAttribute("class", "num-0");
    document.getElementById("second-2").setAttribute("class", "num-0");
}