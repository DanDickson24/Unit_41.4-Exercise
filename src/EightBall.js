import React, { useState } from 'react';
import './EightBall.css'; 

const EightBall = ({ answers }) => {
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('Think of a Question');

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setColor(randomAnswer.color);
    setMessage(randomAnswer.msg);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={getRandomAnswer}
    >
      <p className="message">{message}</p>
    </div>
  );
};

export default EightBall;
