const response = await fetch('/api/users/', {
    method: 'GET',
    body: JSON.stringify({username}),
    headers: {'Content-Type': 'application/json'}
});