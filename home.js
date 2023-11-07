import {  onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth,db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 


const title =document.querySelector('#title')
const des =document.querySelector('#des')
const fom=document.querySelector('#fom')
const div=document.querySelector('#card')
const button=document.querySelector('#btn')

onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
      console.log(uid)
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
        icon: 'success',
        title: 'login successfully'
      })
    } else {
      window.location='./login.html'
    }
  });

// logout function

button.addEventListener('click',()=>{
  signOut(auth).then(() => {
    console.log('logout successfully');

    window.location = './login.html'
  }).catch((error) => {
    console.log(error);
  });
})
// adding post



const arr=[]
async function getDataFromFirestore() {
  arr.length=0  
 const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
 arr.push(doc.data())  
 
});
console.log(arr)
arr.map((item)=>{
div.innerHTML += `<div class='inner-card'>  
<p>Title:${item.Title}<p>
<p>Description:${item.Description}<p>
</div>`
})
}



getDataFromFirestore()



fom.addEventListener('submit', async(e)=>{
  e.preventDefault();
  div.innerHTML =''
  // console.log(title.value)
  // console.log(des.value)
  // console.log(auth.currentUser.uid)

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      Title: title.value,
      Description: des.value,
      uid:auth.currentUser.uid
    
    });

    title.value=''
    des.value=''
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})




