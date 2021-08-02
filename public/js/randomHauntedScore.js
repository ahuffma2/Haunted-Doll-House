randomNumber = (min ,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// const deletePost = async (event) => {
//     if(event.target.hasAttribute('delete-id')) {
//         const id = event.target.getAttribute('delete-id');

//         const res = await fetch(`/api/artifacts/${id}` , {
//             method: 'DELETE',
//         });

//         res.ok 
//           ? document.location.replace('/')
//           : M.toast({html: 'You are not authorized to delete this post'})
//     }
// }


var ratings = document.getElementsByClassName("rating");
 for(var i = 0; i < ratings.length; i++) {
     ratings[i].innerHTML = `Haunted Rating: ${randomNumber(1,100)}%`;
}

console.log('i do stuff');