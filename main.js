// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Add the .hidden class to the error modal
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;

  // Simulate server call
  mimicServerCall()
    .then(() => {
      // On success, toggle the heart state
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      // On failure, display error modal
      errorModal.classList.remove('hidden');
      errorModal.querySelector('#modal-message').innerText = error;
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listeners to all hearts
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', handleHeartClick);
});
