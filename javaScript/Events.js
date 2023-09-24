var counter = null

function onClickButton(el) {
    counter++;
    el.innerHTML = "You click on the butn: " + counter;
    el.style.background = "red";
    el.style.color = "blue";

    el.style.cssText = "border-radius: 5px; border: 5; font-size: 20px";

    console.log(onClickButton);
};


function input(el) {
    if (el.value == "Hello") {
        alert("и тебе привет!")
    } 
    else if (el.value == "hello") {
        alert("и тебе привет!")
    };

    console.log(el.value);
}



