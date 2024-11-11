import React, { useState } from 'react';
import './CatAnimation.css'; 
import catImg from './Images/blackCat.png';
import bulb from './Images/bulb.png';

const BlackCat = ({ lightOn }) => {
    return (
        <div className={`black-cat-container ${lightOn ? 'light-on' : 'light-off'}`}>
          <img src={catImg} alt="Black Cat" className="black-cat-image" />
          {(
            <div>
              <div className="cat-eye-left"></div>
              <div className="cat-eye-right"></div>
            </div>
          )}
        </div>
    );
};

function CatAnimation() {
  const [lightOn, setLightOn] = useState(true);

  const toggleLight = () => {
    setLightOn(!lightOn);
    document.body.classList.toggle('dark-mode', !lightOn);
  };

  return (
    <div className={lightOn ? 'light-on' : 'light-off'}>
      <div style={{display: "flex", gap: "0px"}}>  
        <BlackCat lightOn={lightOn} />
        <BlackCat lightOn={lightOn} />
        <BlackCat lightOn={lightOn} />
        <BlackCat lightOn={lightOn} />
        <BlackCat lightOn={lightOn} />
      </div>
      <button onClick={toggleLight} className="light-bulb"> 
        <img src={bulb} alt="bulb" className="light-bulb-image" /> 
      </button>
    </div>
  );
}

export default CatAnimation;