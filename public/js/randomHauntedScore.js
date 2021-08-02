//RANDOMLY PICKS A NUMBER AND ASSIGNS A RATING TO EACH CARD
//Yes i am aware that this will change every time you refresh and it doesn't actually affect the object or database. 
//This was a last minute bandaid effort to get our project to have as little issues as possible for the demonstration

randomNumber = (min ,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

var ratings = document.getElementsByClassName("rating");
 for(var i = 0; i < ratings.length; i++) {
     ratings[i].innerHTML = `Haunted Rating: ${randomNumber(1,100)}%`;
}

console.log('i do stuff');