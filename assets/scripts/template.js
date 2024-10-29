function renderBookObject(bookObject, id) {
    let price = bookObject.price.toFixed(2).replace(".", ",");

    return `<div class="book-object-container">
                <div class="book-object-title-container">
                    <h2 class="book-object-title">${bookObject.name}</h2>
                </div>
                <div class="book-object-img-container book-object-section">
                    <img
                        src="./assets/img/book.png"
                        alt="Bild eines Buches in gezeichneter Optik"
                        class="book-object-img"
                    />
                </div>
                <div class="book-object-description-container">
                    <div class="book-object-price-and-like-container book-object-section">
                        <div class="book-object-price-container">
                            <span id="book-object-price-span">${price} €</span>
                        </div>
                        <div class="book-object-like-container">
                            <div class="book-object-like-counter-container">
                                <span id="book-object-like-counter-span">${bookObject.likes}</span>
                            </div>
                            <div class="book-object-like-button-container">
                                <button id="book-object-like-btn">
                                    <img
                                        id="book-object-like-btn-img${id}"
                                        src="./assets/img/icons/empty_heart.png"
                                        alt="Like Schaltfläche in Form eines Herzens"
										onclick="toggleLike()"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="book-object-description-details-container">
                        <table class="book-object-description-details">
                            <tr>
                                <td id="book-object-author-td">Author</td>
                                <td class="td-seperator">:</td>
                                <td id="book-object-author-name">${bookObject.author}</td>
                            </tr>
                            <tr>
                                <td id="book-object-year-of-publication-td">Erscheinungsjahr</td>
                                <td class="td-seperator">:</td>
                                <td id="book-object-year-td">${bookObject.publishedYear}</td>
                            </tr>
                            <tr>
                                <td id="book-object-genre-td">Genre</td>
                                <td class="td-seperator">:</td>
                                <td id="book-object-genre">${bookObject.genre}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="book-object-commentary-container book-object-section">
                    <div class="book-object-comment-headline-container">
                        <h5 id="book-object-comment-headline">Kommentare:</h5>
                    </div>
                    <div class="book-object-comment-and-user-container">
                        <div class="book-object-table-container">
                            <table id="book-object-comment-table">
                                <tr>
                                    <td id="userName+userCounter">[Leser123]</td>
                                    <td id="userComment+userCounter">: Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</td>
                                </tr>
                                <tr>
                                    <td id="userNameUserCounter">[Leser123]</td>
                                    <td id="userCommentUserCounter">: Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.</td>
                                </tr>
                            </table>
                        </div>
                        <div class="book-object-comment-input-and-button-container">
                            <input
                                id="book-object-user-comment-input"
                                type="text"
                                placeholder="Schreibe deinen Kommentar ..."
                            />
                            <button id="book-object-send-message-btn">
                                <img
                                    id="book-object-message-btn-img"
                                    src="./assets/img/icons/send_message.png"
                                    alt="Absendeknopf in Form eins Papierfliegers"
									onclick="postMessage()"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
}
