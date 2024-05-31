import { useState, useEffect, useRef } from 'react';
import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";

function Camera({ gestureRecognizer, setGestureRecognizer, webcamRunning, setWebcamRunning, setGameState }) {
  const [cameraList, setCameraList] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initializeGestureRecognizer = async () => {
      const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm");
      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "/number-gesture-recognition.task",
          delegate: "GPU"
        },
        runningMode: "VIDEO",
        numHands: 2
      });

      setGestureRecognizer(recognizer);
    };

    initializeGestureRecognizer();
    populateCameraList();
  }, []);

  const populateCameraList = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    setCameraList(videoDevices);
  };
  
  const handleCameraSelectChange = (event) => {
    setSelectedCamera(event.target.value);
    enableCam(event.target.value);
  };

  const enableCam = async (cameraId) => {
    if (webcamRunning) {
      setWebcamRunning(false);
      if (videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    }

    const constraints = {
      video: {
        deviceId: cameraId ? { exact: cameraId } : undefined
      }
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      videoRef.current.onloadeddata = () => {
        setWebcamRunning(true);
        predictWebcam();
      };
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const predictWebcam = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');

    if (gestureRecognizer.runningMode === "IMAGE") {
      gestureRecognizer.setOptions({ runningMode: "VIDEO" });
    }

    let lastVideoTime = -1;

    const detectGesture = async () => {
      if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;
        const nowInMs = Date.now();
        const results = await gestureRecognizer.recognizeForVideo(video, nowInMs);

        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        const drawingUtils = new DrawingUtils(canvasCtx);
        if (results.landmarks) {
          for (const landmarks of results.landmarks) {
            drawingUtils.drawConnectors(landmarks, GestureRecognizer.HAND_CONNECTIONS, {
              color: "#FFDE1A",
              lineWidth: 1
            });
            drawingUtils.drawLandmarks(landmarks, {
              color: "#FF7400",
              radius: 1
            });
          }
        }

        let left = 'Unknown', right = 'Unknown';
        if (results.gestures.length > 0) {
          const [firstGesture] = results.gestures[0];
          const [firstHand] = results.handednesses[0];
          if (firstHand.categoryName === "Right") {
            left = firstGesture.categoryName;
            right = results.gestures.length > 1 ? results.gestures[1][0].categoryName : "Unknown";
          } else {
            right = firstGesture.categoryName;
            left = results.gestures.length > 1 ? results.gestures[1][0].categoryName : "0";
          }
        }

        let userAnswer = '...';
        if (right === 'Unknown') {
          userAnswer = parseInt(left);
        } else {
          userAnswer = parseInt(left) * 10 + parseInt(right);
        }
        if (!isNaN(userAnswer)) {
          setGameState(prevState => ({
            ...prevState,
            userAnswer: userAnswer.toString(),
            isCorrect: prevState.answer === userAnswer.toString()
          }));
        } else {
          setGameState(prevState => ({
            ...prevState,
            userAnswer: "...",
            isCorrect: undefined
          }));
        }
      }
  
      if (webcamRunning) {
        requestAnimationFrame(detectGesture);
      }
    };
    detectGesture();
  };

  return (
    <div className="flex flex-col items-center w-1/2 my-6">
      {selectedCamera ? (
        <div className='mb-4' style={{ position: 'relative' }}>
          <video ref={videoRef} className="w-full" autoPlay playsInline></video>
          <canvas ref={canvasRef} className="output-canvas absolute top-0 left-0 w-full h-full"></canvas>
        </div>
      ) : null}
      <select id="cameraSelect" className="w-1/2" value={selectedCamera} onChange={handleCameraSelectChange}>
        <option value="">Select a camera</option>
        {cameraList.map((device, index) => (
          <option key={device.deviceId} value={device.deviceId}>{device.label || `Camera ${index + 1}`}</option>
        ))}
      </select>
    </div>
  );
}

export default Camera;
