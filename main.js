// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtn = document.querySelectorAll('.like-glyph');
const errorModal = document.getElementById('modal');
likeBtn.forEach( el => {
  el.addEventListener('click',()=>{
    const e=event.target;
    mimicServerCall()
    .then(response => {
      if(e.innerHTML === FULL_HEART){
        removeHeart(e)
      }
      else{
        addHeart(e)
      }
    })
    .catch( err => {
      console.log(err)
      showError();
    })
  })
})
function showError(){
  errorModal.classList.remove('hidden');
  setTimeout(()=>errorModal.classList.add('hidden'),5000);
}
function addHeart(target){
  //const likeSpan = document.getElementsByClassName('like-glyph')[0];
  target.innerHTML = FULL_HEART;
  target.classList.add('activated-heart');
}
function removeHeart(target){
  target.innerHTML = EMPTY_HEART;
  target.classList.remove('activated-heart');
}

// document.querySelectorAll(".like-glyph").forEach(el => {
//   el.addEventListener("click", function() {
//     console.log(event.target);
//     addHeart(event.target);
//   })
// });
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
