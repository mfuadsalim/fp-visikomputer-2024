import React, { useState } from 'react';
import Camera from './components/Camera';
import Question from './components/Question';
import Modal from "./components/Modal"

function App() {
  const [gestureRecognizer, setGestureRecognizer] = useState(null);
  const [webcamRunning, setWebcamRunning] = useState(false);
  const [gameState, setGameState] = useState({
    userAnswer: '...',
    question: '',
    answer: '',
    isCorrect: undefined
  });

  return (
    <>
      <Modal open={!gestureRecognizer} onClose={null}>
        <div className="flex justify-center items-center p-4">
          <p>Please wait for the MediaPipe task to load ...</p>
        </div>
      </Modal>

      <div className="flex flex-col justify-center items-center w-full">
        <Question setGameState={setGameState} gameState={gameState} />
        <Camera
          gestureRecognizer={gestureRecognizer}
          setGestureRecognizer={setGestureRecognizer}
          webcamRunning={webcamRunning}
          setWebcamRunning={setWebcamRunning}
          setGameState={setGameState}
        />
      </div>
    </>
  );
}

export default App
