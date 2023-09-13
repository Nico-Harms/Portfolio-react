import React, { Component } from 'react';
import './ChaningText.css';
class ChaningText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrases: ['Kollega', 'Medarbejder', 'Front-end developer', 'Ven'],
      currentIndex: 0,
      animationTime: 3000,
    };
  }

  componentDidMount() {
    this.randomizeText();
    this.animationInterval = setInterval(this.randomizeText, this.state.animationTime);
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  randomizeText = () => {
    const { phrases, currentIndex } = this.state;
    let newIndex = currentIndex;

    do {
      newIndex = this.randomNum(phrases.length);
    } while (newIndex === currentIndex);

    this.setState({ currentIndex: newIndex }, () => {
      this.updateAnimationTime();
    });
  };

  randomNum = (max) => {
    return Math.floor(Math.random() * max);
  };

  updateAnimationTime = () => {
    const phrase = document.querySelector('.random-word');
    const compStyles = window.getComputedStyle(phrase);
    let animation = compStyles.getPropertyValue('animation');

    // Firefox support for non-shorthand property
    if (animation === '') {
      animation = compStyles.getPropertyValue('-moz-animation-duration');
    }

    // Webkit support for non-shorthand property
    if (animation === '') {
      animation = compStyles.getPropertyValue('-webkit-animation-duration');
    }

    const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
    this.setState({ animationTime });
  };

  render() {
    const { phrases, currentIndex } = this.state;
    return (
        <div className='randomTextWrapper'>
        <h2>
          Jeg vil gerne være din nye 
        </h2>
        <span className='random-word'>{phrases[currentIndex]}</span>
        </div>
    );
  }
}

export default ChaningText;
