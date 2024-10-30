const likeBtn = document.getElementById("book-object-like-btn");
let likeBtnImg;
const sendBtn = document.getElementById("book-object-send-message-btn");
const mainSection = document.getElementById("main");
const currentUserName = "Dennis";
let allBooks = [];

function toggleLike(id) {
    likeBtnImg = document.getElementById(`book-object-like-btn-img${id}`);
    likeBtnImg.classList.toggle("liked");
    isLiked = allBooks[id].liked;
    if (likeBtnImg.classList.contains("liked")) {
        allBooks[id].liked = true;
    } else {
        allBooks[id].liked = false;
    }

    countLikes(id);
}

function postMessage(id) {
    let commentInputField = document.getElementById(`book-object-user-comment-input${id}`);
    let commentTable = document.getElementById(`book-object-comment-table${id}`);
    let comment = commentInputField.value;
    let newRow = commentTable.insertRow(0);
    let td1 = newRow.insertCell(0);
    let td2 = newRow.insertCell(1);
    td1.innerHTML = `[ ${currentUserName} ]`;
    td2.innerHTML = `: ${comment}`;
    commentInputField.value = "";
}

function getObjects(array) {
    let oneBookObject = {};
    for (i = 0; i < array.length; i++) {
        oneBookObject = array[i];
        isLiked = oneBookObject.liked;
        mainSection.innerHTML += renderBookObject(oneBookObject, i);
        if (oneBookObject.liked) {
            likeBtnImg = document.getElementById(`book-object-like-btn-img${i}`);
            likeBtnImg.classList.add("liked");
        }

        renderCommentTable(oneBookObject, i);
    }
}

function countLikes(id) {
    let counterField = document.getElementById(`book-object-like-counter-span${id}`);
    let currentLikeCount = parseInt(counterField.innerText);

    if (allBooks[id].liked) {
        currentLikeCount++;
        counterField.innerText = currentLikeCount.toString();
    } else {
        currentLikeCount--;
        counterField.innerText = currentLikeCount.toString();
    }
}

function savePageToLocalStorage() {
    let pageContent = document.getElementById("main").innerHTML;
    localStorage.clear();
    localStorage.setItem("main_html", pageContent);
}

function getPageFromLocalStorage() {
    if (localStorage.getItem("main_html")) {
        document.getElementById("main").innerHTML = localStorage.getItem("main_html");
    }
}

function init() {
    allBooks = getArrayOfBookObjects(books);

    if (localStorage.getItem("main_html")) {
        getPageFromLocalStorage();
    } else {
        getObjects(books);
    }
}
