// use this methot if you don't wanna write JS code inner HTML
document.getElementById("form").addEventListener("submit", check)

function check(event) {
    event.preventDefault();
    var el = document.getElementById("form").state;
    
    console.log(el.value)
}