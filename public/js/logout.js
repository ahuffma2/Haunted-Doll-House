const logoutHander = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    response.ok 
      ? document.location.replace('/')
      : alert(response.statusText)

}
//SELECT LOGOUT HERE 
document.querySelector('NAME-OF-LOGOUT-BUTTON-HERE').addEventListener('click',logoutHander);