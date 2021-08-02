const deletePost = async (event) => {
    if(event.target.hasAttribute('delete-id')) {
        const id = event.target.getAttribute('delete-id');

        const res = await fetch(`/api/artifacts/${id}` , {
            method: 'DELETE',
        });

        res.ok 
          ? document.location.replace('/')
          : M.toast({html: 'You are not authorized to delete this post'})
    }
}

//This for loop is needed due to querySelected only grabbing the first element
let artifacts = document.getElementsByClassName("Artifact");
Array.from(artifacts).forEach((el) => {
    el.addEventListener('click',deletePost)
})

//THIS IS LAME AND ONLY SELECTS ONE
//document.querySelector('.Artifact').addEventListener('click', deleteP);