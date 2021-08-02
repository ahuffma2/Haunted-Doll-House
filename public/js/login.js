const loginHandler = async (event) => {
    event.preventDefault();

    //Grabs from id's Username and Password forms on login handlebars
    const username = document.querySelector('.username').value.trim();  
    const password = document.querySelector('.password').value.trim();
    //IF WE WNAT USER TO BE ABLE TO SIGN IN WITH THERE EMAIL WE CAN IMPLEMENT THAT
    //const email = document.querySelector('.email').value.trim();

    
    errorHandler = async (response) => {
        const errorMessage = await response.json();
        console.log(errorMessage.message);
        return errorMessage.message;
    }

    if((username && password)) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });
        

    response.ok 
        ?  document.location.replace('/') // SEND TO HOME ON SUCCESSFUL LOGIN
//:  alert(await errorHandler(response) )
         : M.toast(await errorHandler(response))
    } 
    else {
        alert("Please Make Sure No Fields Are Blank");    //MAKE THESE TOASTS SO WE DONT HAVE UGLY ALERTS
    }

}

document.querySelector('.login_form').addEventListener('submit', loginHandler);  
