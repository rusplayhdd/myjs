// use this methot if you don't wanna write JS code inner HTML
document.getElementById("form").addEventListener("submit", check)

function check(event) {
    event.preventDefault();
    var el = document.getElementById("form").state;
    console.log(el.value)
    
    let name  = document.getElementById("form").f_name.value;
    let sername = document.getElementById("form").l_name.value;
    let pass = document.getElementById("form").pass.value;
    let repass = document.getElementById("form").repass.value;
    let sex = document.getElementById("form").state.value;

    if (name == "" || sername == "") {
        alert("The fields don't be empty!")
    } else if (pass == "" && repass == "") {
        alert('Enter a pasword!')
    } else if (sex == "") {
        alert('Choose your sex!')
    } else {
        alert('Everything was fill in cerrect!!!');
        window.location = 'https://github.com/rusplayhdd'
    }
}