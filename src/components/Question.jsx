import { useState, useEffect } from 'react';

function Question({ setGameState, gameState }) {
  useEffect(() => {
    generateQuestion();
  }, []);

  useEffect(() => {
    if (gameState.isCorrect) {
      const timeoutId = setTimeout(() => {
        const audio = new Audio("/sfx-correct.mp3");
        audio.play();
        generateQuestion();
      }, 500); 

      return () => clearTimeout(timeoutId); 
    }
  }, [gameState.isCorrect]);

  const generateQuestion = () => {
    const operations = ['+', '-', '×', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;
    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * (100 - num1));
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 90) + 10;
        num2 = Math.floor(Math.random() * num1);
        answer = num1 - num2;
        break;
      case '×':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 * num2;
        break;
      case '/':
        num2 = Math.floor(Math.random() * 9) + 1;
        const result = Math.floor(Math.random() * 9) + 1;
        num1 = num2 * result;
        answer = result;
        break;
      default:
        num1 = 0;
        num2 = 0;
        answer = 0;
    }
    setGameState(prevState => ({
      ...prevState,
      question: `${num1} ${operation} ${num2}`,
      answer: answer.toString(),
      userAnswer: "..."
    }));
  };

  let userAnswerTextClass = "font-[Caprasimo] text-[#160041] text-7xl text-center ";
  userAnswerTextClass += gameState.userAnswer === '...' ? 'text-black' : (gameState.isCorrect ? 'text-green-500' : 'text-red-500 vibrate');

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <h1 className="font-[Caprasimo] text-[#160041] text-7xl text-center">{gameState.question}</h1>
        <h1 className="font-[Caprasimo] text-[#160041] text-7xl text-center mx-6">=</h1>
        <h1 className={userAnswerTextClass}>{gameState.userAnswer}</h1>
      </div>
    </div>
  );
}

export default Question;
