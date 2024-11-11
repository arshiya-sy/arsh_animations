import React, { Component } from 'react';
import './Cheer.css';
import pr from './Images/pr.png';

class Cheer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      showImage: false,
      showEncouragement: false,
      showMints: false,
    };
  }

  handleClick = () => {
    this.setState({ isOpened: true });

    setTimeout(() => {
      this.setState({ showImage: true });
    }, 2000);
  };

  handleFinalButtonClick = () => {
    this.setState({ showEncouragement: true });

    setTimeout(() => {
      this.setState({ showMints: true });
    }, 1000); // Delay before showing mints
  };

  renderMints() {
    const mintsArray = [];
    for (let i = 0; i < 20; i++) { // Number of mints
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 3;
      mintsArray.push(
        <div
          key={i}
          className="mint"
          style={{
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}s`,
          }}
        >
          🍬
        </div>
      );
    }
    return mintsArray;
  }

  render() {
    const { isOpened, showImage, showEncouragement, showMints } = this.state;

    return (
      <div className="cheer-container">
        {!isOpened && !showEncouragement ? (
          <div>
            <div className="gift-box" onClick={this.handleClick}>
              🎁
            </div>
            <div className="click-me-text">Click me</div>
          </div>
        ) : showEncouragement ? (
          <>
            <div className="encouragement-message">
              A little encourange-mints for you
            </div>
            {showMints && this.renderMints()}
          </>
        ) : (
          <>
            <div className="flower-animation">
              <div className="big-flower">🌼</div>
            </div>
            {showImage && <img src={pr} alt="Surprise" className="surprise-image" />}
            <div className="text-container">phool for my fool</div>
            <div className="final-button" onClick={this.handleFinalButtonClick}>
              Click me
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Cheer;
