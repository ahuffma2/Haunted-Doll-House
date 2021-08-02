const deleteP = async (event) => {
    if(event.target.hasAttribute('delete-id')) {
        const id = event.target.getAttribute('delete-id');

        const res = await fetch(`/api/artifacts/${id}` , {
            method: 'DELETE',
        });

        res.ok 
          ? document.location.replace('/')
          : alert("Can't Delete This Artifact")
    }
}

console.log(document.querySelector('.Artifact'))
document.querySelector('.Artifact').addEventListener('click', deleteP);