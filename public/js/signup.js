const signupHandler = async (event) => {
    event.preventDefault();

    //these will fail until there are queries here

    const email = document.querySelector('#email_signup').value.trim();
    const username = document.querySelector('#username_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
    const validatePassword = document.querySelector('#validatePassword').value.trim(); //second form to make sure password is spelled correctly

    if(email && username && password && validatePassword && (password == validatePassword)) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username,email,password}),
            headers: { 'Content-Type': 'application/json' },
        });

    response.ok 
       ? document.location.replace('/') //send to home page on successful login
       : alert(response.statusText);
    }


}

document.querySelector('.signup_form').addEventListener('submit', signupHandler);

