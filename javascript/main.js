

const videoPlayer = document.getElementById('video-player');
const playPauseBtn = document.getElementById('play-pause-btn');

playPauseBtn.addEventListener('click', function() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});


function showInput() {
    var commentText = document.querySelector('.add-comment-text');
    var commentInput = document.querySelector('.comment-input');
  
    if (commentText && commentInput) {
      commentText.style.display = 'none';
      commentInput.style.display = 'block';
      commentInput.focus();
    }
  }
  
  function hideInput() {
    var commentText = document.querySelector('.add-comment-text');
    var commentInput = document.querySelector('.comment-input');
  
    if (commentText && commentInput) {
      if (commentInput.value.trim() === '') {
        commentText.style.display = 'block';
        commentInput.style.display = 'none';
      }
    }
  }
  
  function sendComment(event) {
    if (event.keyCode === 13) { // Enter key code is 13
      event.preventDefault(); // Prevent the default form submission
  
      var commentInput = document.querySelector('.comment-input');
  
      if (commentInput) {
        var commentValue = commentInput.value.trim();
  
        if (commentValue !== '') {
          // Perform your comment sending logic here
          console.log('Comment:', commentValue);
  
          // Clear the input field and hide it
          commentInput.value = '';
          hideInput();
  
          // Show a popup message
          showPopup('Comment submitted!');
  
          // Add the comment below the "Add a comment..." text
          addComment(commentValue);
        }
      }
    }
  }
  
  function showPopup(message) {
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(function() {
      popup.classList.add('show');
      setTimeout(function() {
        popup.classList.remove('show');
        setTimeout(function() {
          document.body.removeChild(popup);
        }, 200);
      }, 2000);
    }, 10);
  }
  
  function addComment(comment) {
    var commentContainer = document.createElement('div');
    commentContainer.className = 'comment';
    commentContainer.textContent = comment;
  
    var addCommentText = document.querySelector('.add-comment-text');
    addCommentText.parentNode.insertBefore(commentContainer, addCommentText.nextSibling);
  }
  





// Add event listeners to close icons
const closeIcons = document.querySelectorAll('.close-icon');
closeIcons.forEach((closeIcon) => {
  closeIcon.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
      card.remove();
    }
  });
});


 // JavaScript function to handle button click event
 function followUser(button) {
  button.classList.add('following');
  button.innerText = 'Following';
}



// JavaScript function to handle double-tap event
function showLovePop() {
  const lovePop = document.querySelector('.love-pop');
  lovePop.style.display = 'block';

  // Hide the love pop after 1 second
  setTimeout(function() {
      lovePop.style.display = 'none';
  }, 1000);
}