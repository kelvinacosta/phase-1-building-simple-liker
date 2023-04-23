// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('#modal')
errorModal.classList.add('hidden')

const myLike = document.querySelectorAll('.like-glyph')
myLike.forEach((btn)=>{
  btn.addEventListener('click',() => {
    mimicServerCall()

    .then(res => {
      console.log('Server response: ',res)
      if(btn.innerText === EMPTY_HEART){
        btn.innerText = FULL_HEART
        btn.classList.add('activated-heart')
      }else{
        btn.innerText = EMPTY_HEART
        btn.classList.remove('activated-heart')
      }
    })

    
    .catch(error => {
      errorModal.classList.remove('hidden')
      alert('Server error: '+ error)
      setTimeout(()=>{
        errorModal.classList.add('hidden')
      },3000)
    })
  })
})







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
