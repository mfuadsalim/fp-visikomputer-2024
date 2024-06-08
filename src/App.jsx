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
import Profile from './components/Profile';

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
    <div className='flex justify-between gap-0 items-center px-10'>
    <img src={Girl} alt="Foto Anak Perempuan" className='scale-10 h-fit' />
    <div className='px-10 justify-center'>
    <PlayButton />
    <br />
    <br />
    <Explain />
    </div>
    <img src={Boy} alt="Foto Anak Laki-Laki"/>
    </div>
    <br />
    <br />
      <div className='w-full bg-white p-6'>
      <Modal open={!gestureRecognizer} onClose={null}>
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
      </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className='font-[Caprasimo] text-[40px] text-[#160041] px-10'>About Us</h1>
      <div>
        <Profile />
        <br />
        <p className='text-[#231149] font-[Inter] px-10 text-xl text-justify'>
        Kami adalah <span className='font-bold'>Arief</span> Badrus Sholeh dan Muhammad <span className='font-bold'>Fuad</span> Salim, mahasiswa dari Departemen <span className='font-bold'>Teknik Informatika ITS</span>. Kami berasal dari <span className='font-bold'>Pulau Madura</span>, tempat yang mempertemukan kami dengan semangat dan visi yang sama. Dengan latar belakang dan kecintaan pada teknologi, kami menciptakan platform pembelajaran matematika sederhana berbasis gerakan tangan menggunakan <span className='font-bold'>MediaPipe Hand Gesture Recognition</span>. Kami berkomitmen untuk membuat pembelajaran matematika menjadi mudah, menyenangkan, dan inklusif untuk semua anak, termasuk mereka yang memiliki keadaan disabilitas.
        </p>
      </div>
      <br />
      <hr className='w-11/12 border-slate-600 mx-auto opacity-30'/>
      <br />
      <h1 className='flex justify-center font-[Caprasimo] text-[40px] text-[#160041] px-10'>What We Do?</h1>
      <p className='text-[#231149] text-center font-[Inter] text-base px-32'>Kami berkomitmen untuk memberikan pembelajaran matematika yang inovatif dan inklusif bagi semua anak, menggunakan teknologi <span className='font-bold'>MediaPipe Hand Gesture Recognition</span>. Kami memungkinkan anak-anak belajar matematika sederhana melalui gerakan tangan dengan pendekatan yang menyenangkan dan mudah dipahami. Dengan fokus pada kesederhanaan, keterlibatan, dan hasil maksimal, kami bertujuan untuk memberdayakan setiap anak, termasuk mereka yang memiliki disabilitas, untuk meraih keberhasilan dalam matematika.</p>
    </>
  );
}

export default App
