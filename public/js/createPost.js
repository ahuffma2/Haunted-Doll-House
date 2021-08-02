

errorHandler = async (response) => {
    const errorMessage = await response.json();
    console.log(errorMessage.message);
    return errorMessage.message;
}
    
const createPost = async (event) => {
    event.preventDefault();

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

//IN PROGRESS FOR IMAGE UPLOADING
// let formData = new FormData();
// formData.append("photo", photo);
// fetch('/upload/image', {method: "POST", body: formData});

document.querySelector('.post_form').addEventListener('submit', createPost);