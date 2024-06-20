import { useState } from 'react';
import Camera from './components/Camera';
import Question from './components/Question';
import Modal from "./components/Modal"
import Layout from './pages/Layout';
import HomeSection from './components/HomeSection';
import AboutUsSection from './components/AboutUsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import Footer from './components/Footer';

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
    <Layout>
      <HomeSection />

      {/* Webcam */}
      <section id='webcam' className='w-full h-screen scroll-mt-16 bg-white p-12'>
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
      </section>
      
      <AboutUsSection />

      <WhatWeDoSection />

      <Footer />
    </Layout>
  );
}

export default App
