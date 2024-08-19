
// Function to display persons
function showPersons() {
  const stories = document.getElementById('storysSection');
  stories.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    stories.innerHTML += `<div>${person.img}</div>`;
  }
}


// Function to display posts
function showPosts() {
  const postSection = document.getElementById('posts');
  postSection.innerHTML = '';

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    let commentsHTML = '';

    for (let j = 0; j < post.comments.length; j++) {
      const comment = post.comments[j];
      commentsHTML += `<div class="comment"><strong>${comment.username}</strong> ${comment.text}</div>`;
    }
    postSection.innerHTML += getShowPostsHtml(post, index, commentsHTML); 
  }
}


// Function to add a comment
function addComment(index, username) {
  const input = document.getElementById(`input${index}`);
  if (input.value.trim()) {
      posts[index].comments.push({ username: username, text: input.value });
      savePosts();
      showPosts();
      input.value = '';
  }
}


// Function to display suggestions
function showSuggestions() {
  const suggestionsSection = document.getElementById('suggestions');
  suggestionsSection.innerHTML = `
    <div class="suggestionsLoad">
      <div class="suggestionsLoadDiv">${profile.img} ${profile.name}</div>
    </div>
    <h2>Suggestions</h2>`;

  for (let i = 0; i < suggestions.length; i++) {
    const suggestion = suggestions[i];
    suggestionsSection.innerHTML += `
      <div class="suggestionsLoad">
        <div class="suggestionsLoadDiv">${suggestion.img} ${suggestion.name}</div>
        <p class="suggestionsLoadP" onclick="toggleAdd(${i})">${suggestion.add}</p>
      </div>`;
  }
}


// Function to toggle add/remove suggestions
function toggleAdd(index) {
  suggestions[index].add = suggestions[index].add == 'Follow' ? 'Followed' : 'Follow';
  showSuggestions();
}


// Function to save posts to local storage
function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}


// Function to load posts from local storage
function loadPosts() {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) {
      posts = JSON.parse(savedPosts);
  }
}


// Function to toggle like
function toggleLike(index) {
  const post = posts[index];
  post.likes += post.isLiked ? -1 : 1;
  post.isLiked = !post.isLiked;
  savePosts();
  showPosts();
}


// Function to toggle save
function toggleSave(index) {
  posts[index].isSaved = !posts[index].isSaved;
  savePosts();
  showPosts();
}

