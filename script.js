const clockDisplay = document.getElementById("clockDisplay");

function zeroAdd (i) {

    if ( i < 10) {

         return "0" + i

    } else {

        return i

    }

}

function clock () {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    clockDisplay.innerHTML = h + ":" + zeroAdd(m) + ":" + zeroAdd(s)

    setInterval(() => {
        clock()
    }, 1000);

}

clock();