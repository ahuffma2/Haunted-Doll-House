const { response } = require("express");

const loginHandler = async (event) => {
    event.preventDefault();

    //Grabs from id's Username and Password forms on login handlebars
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
    //IF WE WNAT USER TO BE ABLE TO SIGN IN WITH THERE EMAIL WE CAN IMPLEMENT THAT
    const email = document.querySelector('.email').value.trim();

    if((username && password)) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });
    }

    response.ok 
        ?  document.location.replace('/') // SEND TO HOME ON SUCCESSFUL LOGIN
        :  alert (response.statusText) // WE CAN HAVE A MODAL POP UP TRIGGERED BY THIS LINE

}

document.querySelector('.login_form').addEventListener('submit', loginHandler);
