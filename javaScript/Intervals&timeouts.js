let cnt = 0

// let int = setInterval(sd, 350);

// function sd() {
//     cnt++
//     console.log("Seconds left: " + cnt)

//     if (cnt == 4) {
//         clearInterval(int)     
//     }
// };


let int = setInterval(() => {
    cnt++
    console.log("Seconds left: " + cnt)
    
    if (cnt == 4) {
        clearInterval(int)
    }

}, 350);


setTimeout(() => {
    console.log("The Timeout works well!")
}, 2000);