// Dashboard.js

import React, { useState, useEffect, useRef } from "react";
import { useCameraStore } from './store/camera-store';
import useLoadingStore from './store/loading-store';
import LogoLoader from './LogoLoader';
import CameraCard from "./CameraCard";
import Header from "./Header";
import PopupModal from "./PopupModal";
import obexLogo from "./obex-logo.png";
import './index.css';

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { pipeline } from "@huggingface/transformers";
import "@tensorflow/tfjs-backend-wasm";

export default function Dashboard() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [audioLabel, setAudioLabel] = useState("");
  const [audioScore, setAudioScore] = useState(0);

  const { showLoading, hideLoading } = useLoadingStore();
  const CameraStreams = useCameraStore(state => state.CameraStreams);
  const addToCameraStreams = useCameraStore(state => state.addToCameraStreams);
  const clearCameraStreams = useCameraStore(state => state.clearCameraStreams);

  // Existing start/stop camera
  const handleStartCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  };
  const handleStopCamera = () => {
    stream?.getTracks().forEach(t => t.stop());
    setStream(null);
  };

  // 🔍 Object Detection
  useEffect(() => {
    let model, interval;
    const init = async () => {
      model = await cocoSsd.load();
      interval = setInterval(async () => {
        if (videoRef.current) {
          const preds = await model.detect(videoRef.current);
          setPredictions(preds);
        }
      }, 500);
    };
    if (stream) init();
    return () => clearInterval(interval);
  }, [stream]);

  // 🎨 Draw detections
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    predictions.forEach(pred => {
      const [x, y, w, h] = pred.bbox;
      ctx.strokeStyle = "cyan"; ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
      ctx.fillStyle = "cyan"; ctx.font = "14px Arial";
      ctx.fillText(`${pred.class} ${(pred.score*100).toFixed(1)}%`, x, y > 10 ? y-5 : 10);
      if (pred.class === "person" && pred.score > 0.9) {
        console.log("🚨 Person > 90% detected");
      }
    });
  }, [predictions]);

  // 🧠 Audio Classification via HF Transformers.js
  useEffect(() => {
    async function initAudio() {
      const audioPipe = await pipeline('audio-classification', 'superb/hubert-base-superb-er', { progress_callback: null });
      // continuously listen using Web Audio API
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      source.connect(processor);
      processor.connect(audioContext.destination);
      processor.onaudioprocess = async e => {
        const input = e.inputBuffer.getChannelData(0);
        const result = await audioPipe(input);
        if (result && result.length > 0) {
          const top = result[0];
          setAudioLabel(top.label);
          setAudioScore(top.score);
          if (top.label === "speech" && top.score > 0.9) {
            alert("🚨 Detected high-confidence speech!");
          }
        }
      };
    }
    initAudio();
  }, []);

  // render UI...
  return (
    <>
      <Header />
      <LogoLoader />
      {/* existing modal and layout code... */}
      <main className="...">
        {/* your existing Live Feed structure */}
        <section id="webcam" className="...">
          <div className="relative ...">
            { /* camera prompt logic... */ }
            <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
            <canvas ref={canvasRef} width={640} height={480}
              className="absolute top-0 left-0 pointer-events-none" />
          </div>
        </section>

        {/* DISPLAY audio label */}
        <div className="text-white mt-4">
          🎧 Audio: <strong>{audioLabel}</strong> ({(audioScore*100).toFixed(1)}%)
        </div>

        {/* remaining UI */}
      </main>
    </>
  );
}
