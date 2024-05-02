import { useState } from 'react';
import style from './App.module.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const rotateDropSymbol = ()=>{
    setIsOpen((prevVal)=> !prevVal);
  }
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div className={style.dropDown}>
      <div className={style.dropDownHeading} onClick={rotateDropSymbol}>
        <span>Drop Down</span>
        <div className={`${style.dropDownSymbol} ${isOpen ? style.dropDownRotate : ''}`}></div>
      </div>
      {isOpen && (
        <ul className={style.dropDownOptions}>
          <li className={activeItem === 0 ? style.active : ''} onClick={() => handleItemClick(0)}>Select-1</li>
          <li className={activeItem === 1 ? style.active : ''} onClick={() => handleItemClick(1)}>Select-2</li>
          <li className={activeItem === 2 ? style.active : ''} onClick={() => handleItemClick(2)}>Select-3</li>
          <li className={activeItem === 3 ? style.active : ''} onClick={() => handleItemClick(3)}>Select-4</li>
        </ul>
      )}
    </div>
  );
}

export default App;
