import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./config.js";


const email =document.querySelector('#em')
const password =document.querySelector('#pass')
const form =document.querySelector('#form')

form.addEventListener('submit',(event)=>{
event.preventDefault()
// console.log(email.value)
// console.log(password.value)
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
   
    window.location='./home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Incorrect password'
      })
  });


email.value=''
password.value=""
})

