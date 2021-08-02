const signupHandler = async (event) => {
    event.preventDefault();

    //these will fail until there are queries here

    const email = document.querySelector('#email_signup').value.trim();
    const username = document.querySelector('#username_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
    const validatePassword = document.querySelector('#validatePassword').value.trim(); //second form to make sure password is spelled correctly

    errorHandler = async (response) => {
        const errorMessage = await response.json();
        console.log(errorMessage.message);
        return errorMessage.message;
    }

    if(email && username && password && validatePassword && (password == validatePassword)) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username,email,password}),
            headers: { 'Content-Type': 'application/json' },
        });

    response.ok 
       ? document.location.replace('/') //send to home page on successful login
       : alert(await errorHandler(response));
    }
    else {
        alert("Please Make Sure No Fields Are Blank");    //MAKE THESE TOASTS SO WE DONT HAVE UGLY ALERTS
    }



}

document.querySelector('.signup_form').addEventListener('submit', signupHandler);

