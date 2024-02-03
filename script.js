document.getElementById('post_form').addEventListener('submit', function(event) {
    event.preventDefault();
   const postText = document.getElementById('post_input').value;
    if (postText) {
      const postElement = document.createElement('div');
      postElement.classList.add('post_card');
      
      postElement.innerHTML = `
        <div class="post_header">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="Profile Image">
            <span>you</span>
        </div>
        <div class="post_message">
            <p>${postText}</p>
        </div>
        <div class="post_options">
        <button class="like_option">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="Like icon">
        </button>
        <button class="comment_option">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="Comment icon">
        </button>
        <button class="edit_option">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="Edit icon">
        </button>
        <button class="delete_option">
          <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="Delete icon">
        </button>
      </div>
      `;
  
      const yourFeed = document.getElementById('your_feed');
      yourFeed.insertBefore(postElement, yourFeed.firstChild);
  
      document.getElementById('post_input').value = '';
  
      postElement.querySelector('.edit_option').addEventListener('click', function() {
        const postMessage = postElement.querySelector('.post_message p');
        const newPostInput = document.createElement('input');
        newPostInput.type = 'text';
        newPostInput.value = postMessage.textContent;
        postMessage.replaceWith(newPostInput);
        newPostInput.focus();
  
        newPostInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
            postMessage.textContent = newPostInput.value;
            const newPostForm = document.createElement('form');
            newPostForm.innerHTML = `
              <div class="post_options">
              <button class="like_option">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="Like icon">
              </button>
              <button class="comment_option">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="Comment icon">
              </button>
              <button class="edit_option">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="Edit icon">
              </button>
              <button class="delete_option">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="Delete icon">
              </button>
            </div>
            `;
            postElement.querySelector('.post_options').replaceWith(newPostForm);
            newPostForm.addEventListener('submit', function(event) {
              event.preventDefault();
            });
            newPostInput.replaceWith(postMessage);
  
            const newPostOptions = newPostForm.querySelector('.post_options');
            const likeButton = newPostOptions.querySelector('.like_option img');
            likeButton.addEventListener('click', function() {
              if (likeButton.src.includes('heart-solid.png')) {
                likeButton.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
              } else {
                likeButton.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
              }
            });
  
            const deleteButton = newPostOptions.querySelector('.delete_option');
            deleteButton.addEventListener('click', function() {
              if (confirm("Are you sure you want to delete this post?")) {
                yourFeed.removeChild(postElement);
              }
            });
          }
        });
      });
  
      postElement.querySelector('.like_option').addEventListener('click', function() {
        const likeButton = postElement.querySelector('.like_option img');
        if (likeButton.src.includes('heart-solid.png')) {
          likeButton.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
        } else {
          likeButton.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
        }
      });
  
      postElement.querySelector('.delete_option').addEventListener('click', function() {
        if (confirm("Are you sure you want to delete this post?")) {
          yourFeed.removeChild(postElement);
        }
      });
    }
  });