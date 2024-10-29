const likeBtn = document.getElementById("book-object-like-btn");
const likeBtnImg = document.getElementById("book-object-like-btn-img");
const sendBtn = document.getElementById("book-object-send-message-btn");
const commentInputField = document.getElementById("book-object-user-comment-input");
const commentTable = document.getElementById("book-object-comment-table");
const currentUserName = "Dennis";

function toggleLike() {
    likeBtnImg.classList.toggle("liked");
}

likeBtn.addEventListener("click", function () {
    toggleLike();
});

function postMessage() {
    let comment = commentInputField.value;
    let newRow = commentTable.insertRow(0);
    let td1 = newRow.insertCell(0);
    let td2 = newRow.insertCell(1);
    td1.innerHTML = `[${currentUserName}]`;
    td2.innerHTML = `: ${comment}`;
    commentInputField.value = "";
}

sendBtn.addEventListener("click", function () {
    postMessage();
});
