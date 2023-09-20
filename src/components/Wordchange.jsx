import React, { useEffect } from 'react';
import './Wordchange.css';

function WordChange() {

  useEffect(() => {
    const text = document.querySelector(".word");
    setTimeout(() => {
      text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "UX/UI Designer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "Web Developer";
    }, 8000);
    setTimeout(() => {
      text.textContent = "Front-End Developer";
    }, 12000);
  }, []);

  return (
    <div className='word-change'>
      <span className='word'> Front-End Developer</span>
    </div>
  );
}

export default WordChange;
