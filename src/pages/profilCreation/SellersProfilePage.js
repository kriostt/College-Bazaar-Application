import React from 'react';
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import axios from "axios";


import { useState} from 'react';

function SellersProfilePage() {
 
  
  const [imgUrl,setImgUrl] = useState();
  const [firstName,setfirstName] = useState();
  const [lastName,setlastName] = useState();
  const [email,setemail] = useState();
  const [phoneNumber,setphoneNumber] = useState();
  const [rating,setrating] = useState();
  const [studentID,setstudentID] = useState();

  const studentId = sessionStorage.getItem('studentId'); 
  const hashedPassword = sessionStorage.getItem('hashedPassword');
  const usrID = sessionStorage.getItem('usrID');

  




  const url = `http://localhost:8080/api/bazaarUsers/${usrID}`;
  axios.get(url)
  .then((response) => {
    const userData = response.data; 

    // Access user data based on ID from receivedData
    
    console.log("User first name:", userData.fname);
    console.log("User email:", userData.email);
    console.log("User ID:", userData.usrID);
    
    // console.log("image url is->"+imageUrl);
    setImgUrl(userData.imgurl);
    setfirstName(userData.fname);
    setlastName(userData.lname);
    setemail(userData.email);
    setphoneNumber(userData.phoneNumber);
    setstudentID(userData.studentId);
    setrating("5.0");
    
    // ... (rest of your code)
  })
  .catch((error) => {
    console.error("API request failed:", error);
  });


 
  //alert("student ->"+studentId+" hashed password->"+hashedPassword+ " usrID->"+usrID )
  // Sample items that the user is selling
  const itemsForSale = [
    {
      id: 1,
      title: 'Product 1',
      price: '$20',
      image: require('../../images/tumbler.jpg'), // Replace with the actual URL of the product image
    },
    {
      id: 2,
      title: 'Product 2',
      price: '$30',
      image: require('../../images/jacket.jpg'), // Replace with the actual URL of the product image
    },
    {
        id: 3,
        title: 'Product 1',
        price: '$20',
        image: require('../../images/book.jpg'), // Replace with the actual URL of the product image
      },
      {
        id: 4,
        title: 'Product 2',
        price: '$30',
        image: require('../../images/bag.jpg'), // Replace with the actual URL of the product image
      },
    // Add more items as needed
  ];

  // ... (previous code)

return (
    <div className=''>
      <div className="container mt-5 bg">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={imgUrl} alt="Profile" className="card-img-top profile-picture" />
              <div className="card-body">
                <h5 className="card-title">{firstName} {lastName}</h5>
                <p className="card-text">Student ID: {studentID}</p>
                <p className="card-text">Rating: {rating}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">User Details</h3>               
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Phone Number: {phoneNumber}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 d-flex ">
            <button className="btn btn-primary">
                <Link to="http://localhost:3000/messaging" className="btn btn-primary">
                <i className="fas fa-envelope mr-2"></i>&nbsp; Message
                </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/myprofile" >
                Items
                </a>
            </li>
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/categories" >
                Sellers Catalog
                </a>
            </li>
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/reviews" >
                Reviews
                </a>
            </li>
        </ul>
      </div>
      <div className="container mt-5">
        <div className="mt-4">
          <h3>Items for Sale</h3>
          <div className="row">
            {itemsForSale.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={item.image} alt={item.title} className="card-img-top product-image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Price: {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}  

export default SellersProfilePage;
