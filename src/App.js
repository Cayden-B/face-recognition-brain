import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import particlesOptions from "./particles.json";
import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
    <div className="App">
       <Particles options={particlesOptions} init={particlesInit}/>
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {
      
            /*
       * <FaceRecognition />
       */

      }
    </div>
  );
}

export default App;
