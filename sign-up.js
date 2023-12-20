const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("sucess");

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.;:\s@"]+)*)|(".+"))@((\[[0-9]{1.3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setSuccess = element => {
    const innerControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if(usernameValue == ""){
        setError(username, "Username is required");
    }
    else{
        getSuccess(username);
    }

    if(emailValue == ""){
        setError(username, "Username is required");
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }
    else{
        setSuccess(email);
    }
    if(passwordValue === ""){
        setError(password,"Password is required")
    }
    else if(password.length < 8){
        setError(password,"Password must be at least 8 characters")
    }
    else{
        setSuccess(password);
    }
};