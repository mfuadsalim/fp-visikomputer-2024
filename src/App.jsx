import React, { useState } from 'react';
import Boy from "./assets/boy.png"
import Girl from "./assets/girl.png"
import Camera from './components/Camera';
import Question from './components/Question';
import Modal from "./components/Modal"
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import PlayButton from './components/PlayButton'
import Explain from './components/Explain';

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
    <Navbar />
    <div className='mx-auto pt-8'>
      <p className='font-[Caprasimo] text-[40px] text-[#160041] text-center'>Matematika Mudah dengan <br /> Cara Sederhana!</p>
    </div>
    <Tagline />
    <div className='flex justify-between items-center px-10'>
    <img src={Girl} alt="Foto Anak Perempuan" className='scale-10 h-fit' />
    <div className='px-10 justify-center'>
    <PlayButton />
    <br />
    <br />
    <Explain />
    </div>
    <img src={Boy} alt="Foto Anak Laki-Laki"/>
    </div>
    
      {/* <Modal open={!gestureRecognizer} onClose={null}>
        <div className="flex justify-center items-center p-4">
          <p>Please wait for the MediaPipe task to load ...</p>
          <p>Testing</p>
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
      </div> */}
    </>
  );
}

export default App
