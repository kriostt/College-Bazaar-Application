import React from 'react'
import Attach from "../img/attach.png";
import img from "../img/upload.png";

function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
        <div className="send">
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} id="file" />
            <label htmlFor="file">
                <img src={img} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input
