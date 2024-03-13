
import React from 'react'
import "./style.scss"
import Add from "../img/upload.png"
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth,storage,db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useState } from 'react';

function Register() {
  const [err,setErr] = useState(false)
  const handleSubmit  = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      

      
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

     
      uploadTask.on('state_changed', 
       
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
              await updateProfile(res.user,{
                  displayName,
                  photoURL:downloadURL,
              });
              await setDoc(doc(db,"users", res.user.uid),{
                uid:res.user.uid,
                displayName,
                email,
                photoURL:downloadURL,
            });  
          });
        }
      );

      
    }catch(err){
        setErr(true);
    }
    
     
  }

  return (
    <div>
            <div className='formContainer'>
                <div className='formWrapper'>
                        <span className='logo'>RDP messaging</span>
                        <span className='title'>Register</span>
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder='display name' />
                            <input type='email' placeholder='email'/>
                            <input type='password' placeholder='password'/>
                            <input style={{display:"none"}} type="file" id="file"  />
                            <label htmlFor='file'>
                                <img  src={Add} alt="" className='uploadImg' />
                                <span>Add an avatar</span>
                            </label>
                            <button>Sign up</button>
                            {err && <span>Something wennt wrong</span>}
                        </form>
                        <p>You do have an account? login</p>
                </div>
            </div>
    </div>
  )
}

export default Register
