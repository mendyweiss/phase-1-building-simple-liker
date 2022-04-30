// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.querySelectorAll('.like-glyph')

function heartCheckFiller (e) {
  const heart = e.target

  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.textContent = EMPTY_HEART
    heart.classList.remove('.activated-heart')
  }
}

likeButton.forEach(i => {
  i.addEventListener(
    'click', (e) => { mimicServerCall()
      .then(() => {
        heartCheckFiller(e)
        })
      .catch((resp) => {
        const errorBox = document.querySelector('#modal')
        errorBox.classList.remove('hidden')
        document.querySelector('#modal-message').textContent = resp
        setTimeout(() => {errorBox.classList.add('hidden')}, 3000)
      })
      }   
    )
  }
)



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
