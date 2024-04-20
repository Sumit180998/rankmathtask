import React,{useState} from 'react'
import './Menu.css'


export default function Menu({isOpen}) {
   

  return (
    
      <>

      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            
            <span>Edit</span>
            <span className="dropdown-item-icon">✎</span>
          </div>
          <div className="dropdown-item">
          <span>Courier info</span>
            <span className="dropdown-item-icon">ℹ️</span>
            
          </div>
          <div className="dropdown-item">
          <span>Share</span>
            <span className="dropdown-item-icon">↑</span>
            
          </div>
          <div className="dropdown-item" onClick={() => {/* handle remove action */}}>
          <span>Remove</span>
            <span className="dropdown-item-icon">🚫</span>
           
          </div>
        </div>
      )}
      </>
   
  );
};

