const logoutHandler = async () => {
    console.log('logging out')
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    response.ok 
      ? document.location.replace('/')
      : alert(response.statusText)

}
//SELECT LOGOUT HERE 
document.querySelector('.log-out').addEventListener('click',logoutHandler);

console.log(document.querySelector('.log-out'));