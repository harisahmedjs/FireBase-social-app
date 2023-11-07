import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from'./config.js'


const email = document.querySelector('#em')
const password = document.querySelector('#pass')
const form = document.querySelector('#form')
 


form.addEventListener('submit',(event)=>{
    event.preventDefault();
createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
 
  const user = userCredential.user;
  console.log(user);
  Swal.fire({
    title: 'Registration successfully',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

email.value = ''
password.value = ''
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage)
    Swal.fire({
      title: `Email is alredy in use`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
});

})