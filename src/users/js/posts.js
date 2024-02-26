  document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => display(posts));
  });

  function display(posts) {
    const postData = document.getElementById('single-post');
    posts.forEach(postEle => {
      const postContainer = document.createElement('div');
      postContainer.classList.add("postContainer");
      postContainer.innerHTML = `
        <h3>${postEle.title}</h3>
        <p>${postEle.body}</p>
        <button class="set" onclick="toggleComments(${postEle.id})">View Comments</button>
        <div id="comments-${postEle.id}" style="display: none;"></div>`;
      postData.append(postContainer);
    });
  }

  function toggleComments(postId) {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

    if (commentsContainer.style.display === 'none' || commentsContainer.style.display === '') {
      fetchComments(postId, commentsContainer, commentsUrl);
    } else {
      commentsContainer.style.display = 'none';
    }
  }

  function fetchComments(postId, commentsContainer, commentsUrl) {
    fetch(commentsUrl)
      .then(response => response.json())
      .then(comments => {
        commentsContainer.innerHTML = '';
        comments.forEach(comment => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
          commentsContainer.append(commentElement);
        });
        commentsContainer.style.display = 'block';
      })
      .catch(error => console.error('Error fetching comments:', error));
  }










