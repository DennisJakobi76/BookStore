const likeBtn = document.getElementById("book-object-like-btn");
let likeBtnImg = document.getElementById("book-object-like-btn-img");
const sendBtn = document.getElementById("book-object-send-message-btn");
const commentInputField = document.getElementById("book-object-user-comment-input");
const commentTable = document.getElementById("book-object-comment-table");
const mainSection = document.getElementById("main");
const currentUserName = "Dennis";
let allBooks = [];

function toggleLike() {
    likeBtnImg.classList.toggle("liked");
}

function postMessage() {
    let comment = commentInputField.value;
    let newRow = commentTable.insertRow(0);
    let td1 = newRow.insertCell(0);
    let td2 = newRow.insertCell(1);
    td1.innerHTML = `[${currentUserName}]`;
    td2.innerHTML = `: ${comment}`;
    commentInputField.value = "";
}

function getObjects(array) {
    let oneBookObject = {};
    for (i = 0; i < array.length; i++) {
        oneBookObject = array[i];

        mainSection.innerHTML += renderBookObject(oneBookObject, i);
        if (oneBookObject.liked) {
            likeBtnImg = document.getElementById(`book-object-like-btn-img${i}`);
            likeBtnImg.classList.add("liked");
        }
    }
}

function init() {
    allBooks = getArrayOfBookObjects(books);
    getObjects(books);
}
