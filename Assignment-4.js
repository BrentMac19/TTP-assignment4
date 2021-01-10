//-------------Arguing Buttons--------------------------------------------//
const buttons=document.querySelectorAll("button");
let arrg=document.querySelector("h1");
buttons.forEach(button=> {button.addEventListener("click",function(e){
    if(button.id==="button1"){
        arrg.innerHTML="I'm right";
    }
    else{
        arrg.innerHTML="No, I'm right";
    }
})})

//--------------Warnining Hover Promt------------------------------------//

// let hover=document.getElementById("hover");
// hover.addEventListener("mouseover",function(e){
//     alert("HEY!! I SAID DONT HOVER OVER ME!!")
// });

//-----------------Submit Form -----------------------------------------//
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let text=document.getElementById("login-header");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const email=loginForm.email.value;


    if (username!=""&&email!=""&&password === "12345678") {
        text.innerHTML ="Welcome";
    } 
    else {
        alert("Password is incorrect");
    }
})