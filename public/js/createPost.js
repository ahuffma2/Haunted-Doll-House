const createPost = async (event) => {
    event.preventDefault();

    console.log('i am being called')
    //these will fail until there are queries here

    const name = document.querySelector('#title_post').value.trim();
    const description = document.querySelector('#description_post').value.trim();
    const price = document.querySelector('#price_post').value.trim();

    if(name && description && price) {
        const response = await fetch('/api/artifacts/', {
            method: 'POST',
            body: JSON.stringify({name,description,price}),
            headers: { 'Content-Type': 'application/json' },
        });

    response.ok 
       ? document.location.replace('/') //send to home page on successful post creation
       : alert(response);
    }

}

document.querySelector('.post_form').addEventListener('submit', createPost);