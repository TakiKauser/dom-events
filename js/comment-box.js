// step 1: add button event handler
document.getElementById("submit-comment").addEventListener("click", function(){
    // console.log("clicked");

    // step 2: get user comment
    const commentText = document.getElementById("new-comment");
    const userComment = commentText.value;
    // console.log(userComment);

    // step 3: create comment paragraph
    const newComment = document.createElement("p");
    newComment.innerText = userComment;

    // step 4: append the comment
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);

    // step 5: clear the comment box
    commentText.value = "";
})