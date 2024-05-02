import { useState } from 'react';
import style from './App.module.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [displayDropText, setDisplayDropText] = useState('Drop Down');
  // const rotateDropSymbol = ()=>{
  //   setIsOpen((prevVal)=> !prevVal);
  // }
  const handleItemClick = (index, displayText) => {
    setActiveItem(index);
    setDisplayDropText(()=>displayText);
    setIsOpen(()=>false);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  
  return (
    <div className={style.dropDown} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className={style.dropDownHeading} >
        <span>{displayDropText}</span>
        <div className={`${style.dropDownSymbol} ${isOpen ? style.dropDownRotate : ''}`}></div>
      </div>
      {isOpen && (
        <ul className={style.dropDownOptions}>
          <li className={activeItem === 0 ? style.active : ''} onClick={() => handleItemClick(0, 'Select-1')}>Select-1</li>
          <li className={activeItem === 1 ? style.active : ''} onClick={() => handleItemClick(1, 'Select-2')}>Select-2</li>
          <li className={activeItem === 2 ? style.active : ''} onClick={() => handleItemClick(2, 'Select-3')}>Select-3</li>
          <li className={activeItem === 3 ? style.active : ''} onClick={() => handleItemClick(3, 'Select-4')}>Select-4</li>
        </ul>
      )}
    </div>
  );
}

export default App;
