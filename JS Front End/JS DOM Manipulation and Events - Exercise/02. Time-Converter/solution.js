function attachEventsListeners() {

    let daysInput = document.getElementById("days");
    let daysBtn = document.getElementById("daysBtn");

    let hrsInput = document.getElementById("hours");
    let hrsBtn = document.getElementById("hoursBtn");

    let minInput = document.getElementById("minutes");
    let minBtn = document.getElementById("minutesBtn");

    let secondsInput = document.getElementById("seconds");
    let secondsBtn = document.getElementById("secondsBtn");


    daysBtn.addEventListener("click", daysConvert);
    hrsBtn.addEventListener("click", hrsConvert);
    minBtn.addEventListener("click", minConvert);
    secondsBtn.addEventListener("click", secConvert);

    function daysConvert()
    {
        hrsInput.value = daysInput.value * 24;
        minInput.value = hrsInput.value * 60;
        secondsInput.value = minInput.value * 60;
    }

    function hrsConvert()
    {
        daysInput.value = hrsInput.value / 24;
        minInput.value = hrsInput.value * 60;
        secondsInput.value = minInput.value * 60;
    }

    function minConvert(){
        hrsInput.value = minInput.value / 60;
        daysInput.value = hrsInput.value / 24;
        secondsInput.value = minInput.value * 60;
    }

    function secConvert()
    {
        minInput.value = secondsInput.value / 60;
        hrsInput.value = minInput.value / 60;
        daysInput.value = hrsInput.value / 24;
    }

}