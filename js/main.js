// Create/Post
/*
1.- Locate and Add listener to Post button
2.- In the listener callback function:
    a) Take input fields: Title, Content and ImageURL
    b) Do a post to the endpoint to save the new object- Use an Async/xmlhttprequest function

    c) Inside the async/xmlhttprequest function, render the post column in the aside. This should get the data from the endpoint

    d) Each post should show: Title, image, content, and Show, Edit and Delete button. Add the id of the post in each button as a data- attribute
*/



let showMoreArticlesButton = document.getElementsByClassName("more-articles")
const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/********/.json"
let postObject = {}
let postingButton = document.getElementById("posting-button")


postingButton.addEventListener( "click", evento =>{
    let articleTitle = document.getElementById("article-title").value 
    let articleBody = document.getElementById("article-body").value
    let articleImage = document.getElementById("article-image").value
    console.log(articleTitle)
    console.log(articleBody)
    console.log(articleImage)
}) 