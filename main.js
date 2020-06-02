// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtn = document.getElementsByClassName('like')[0];
const errorModal = document.getElementById('modal');
likeBtn.addEventListener('click',()=>{
  mimicServerCall()
  .then(addHeart())
  .catch( err => {
    showError();
  })
})
function showError(){
  errorModal.classList.remove('hidden');
  setTimeout(()=>errorModal.classList.add('hidden'),5000);
}
function addHeart(){
  const likeSpan = document.getElementsByClassName('like-glyph')[0];
  likeSpan.innerHTML = FULL_HEART;
  likeSpan.classList.add('activated-heart');

}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
