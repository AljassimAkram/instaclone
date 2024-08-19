function getShowPostsHtml(post, index, commentsHTML) {
    return `
        <div class="fieldPost">
            <div class="headerPost">${post.person} ${post.name}</div>
            <div class="fotoPost">${post.foto}</div>
            <div class="footerPost"> 
                <div class="footerPostDiv">
                    <img class="heart-icon ${post.isLiked ? 'liked' : ''}" src="${post.isLiked ? 'img/redLike.png' : 'img/like.png'}" alt="Like" onclick="toggleLike(${index})">
                    ${post.comment}
                    ${post.share}
                </div>
                <div>
                    <img class="save-icon ${post.isSaved ? 'saved' : ''}" src="${post.isSaved ? 'img/save.png' : 'img/blackSave.png'}" alt="Save" onclick="toggleSave(${index})">
                </div>
            </div>
            <div class="likes-section">
                <span id="likes-count${index}">${post.likes} Likes</span>
            </div>
            <div class="description">${post.description}</div>
            <div id="comments-section${index}">
                <div id="comments${index}" class="comments">${commentsHTML}</div>
                <div class="add-comment">
                    <input id="input${index}" class="comment-input" placeholder="Kommentar hinzufügen...">
                    <button onclick="addComment(${index}, 'akram_Jassim')" class="comment-button">Posten</button>
                </div>
            </div>
        </div>`;
}


function initialize() {
    loadPosts();
    showPersons();
    showPosts();
    showSuggestions();
}
