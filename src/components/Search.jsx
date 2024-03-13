import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text"  placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src="https://firebasestorage.googleapis.com/v0/b/rdpuserimages.appspot.com/o/images%2Fleaf-on-wood-floor-1.jpg90e6d2b8-66f9-4d92-8d39-29fb9e8b9658?alt=media&token=03989933-6356-4df2-b78f-ae9c9aaff0df" alt="" />
            <div className="userChatInfo">
                <span>Mary</span>
            </div>
        </div>
    </div>
  )
}

export default Search
