import React,{useState} from 'react';
import './Header.css'; 
import Menu from '../Menu/Menu';

function Header() {
  
  const [isOpen, setIsOpen] = useState(false);

  
  const handleBackClick = () => {
  
  
  };

  const handleMenuClick = () => {
    // Logic to show a menu or perform some action
    setIsOpen(!isOpen);
    console.log('Menu clicked');
  };

  return (<>
    <header className="header">
      <button onClick={handleBackClick} className="icon-button">
      <i class="fa-solid fa-chevron-left fa-beat"></i>
      </button>
        <p>bitcoin wallet</p>
      <button onClick={handleMenuClick} className="icon-button">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </header>
    <Menu isOpen={isOpen}/>
  </>
    
  );
}

export default Header;
