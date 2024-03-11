import React, { useState } from 'react';
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MessagingUi = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Seller', content: 'Hello! How can I assist you today?' },
    { id: 2, sender: 'Customer', content: 'Hi! Im interested in Product 1.' },
    { id: 3, sender: 'Seller', content: 'Sure! Product 1 is a great choice. It costs $20.' },
    { id: 4, sender: 'Customer', content: 'Can you provide more details about the product?' },
    { id: 5, sender: 'Seller', content: 'Certainly! Product 1 is a high-quality item with...' },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj = { id: messages.length + 1, sender: 'Customer', content: newMessage };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    
    <div className="container mt-5">
      <div className='row'>
      
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/myprofile" >
                Items
                </a>
            </li>
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/categories" >
                Categories
                </a>
            </li>
            <li className="nav-item">
                <a className='nav-link' href="http://localhost:3000/reviews" >
                Reviews
                </a>
            </li>
        </ul>
      
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Messaging with Seller</h5>
            </div>
            <div className="card-body message-container">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'Customer' ? 'customer' : 'seller'}`}
                  style={{ textAlign: message.sender === 'Customer' ? 'right' : 'left' }}
                >
                  <strong>{message.sender}: </strong>
                  {message.content}
                </div>
              ))}
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingUi;
