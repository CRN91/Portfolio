import React from 'react';
import { SiPython, SiC, SiMysql, SiHaskell, SiReact, SiPandas, SiGodotengine, SiLinux, SiGnubash, SiGit, SiJavascript } from '@icons-pack/react-simple-icons';
import './Technologies.css';
import { ReactComponent as JavaLogo } from './java.svg';

const screenScale = window.innerWidth < 600 ? 2 : 1;

const Technologies = () => {
  return (
    <>
    <h2 className="technologies-title">Technologies I've worked with</h2>

    <div className="technologies-container">
      <div className="icon-grid-container">
        <div className="icon-item" data-tooltip="Haskell">
          <SiHaskell />
        </div>
        <div className="icon-item" data-tooltip="Godot">
          <SiGodotengine />
        </div>
        <div className="icon-item" data-tooltip="Git">
          <SiGit />
        </div>
        <div className="icon-item" data-tooltip="Linux">
          <SiLinux />
        </div>
        <div className="icon-item" data-tooltip="Bash">
          <SiGnubash />
        </div>
        <div className="icon-item" data-tooltip="C">
          <SiC />
        </div>
        <div className="icon-item" data-tooltip="Python">
          <SiPython />
        </div>
        <div className="icon-item" data-tooltip="Pandas" alt="Pandas">
          <SiPandas />
        </div>
        <div className="icon-item" data-tooltip="MySQL" >
          <SiMysql />
        </div>
        
        <div className="icon-item" data-tooltip="React">
          <SiReact />
        </div>
        <div className="icon-item" data-tooltip="Javascript">
          <SiJavascript />
        </div>
        <div className="icon-item" data-tooltip="Java">
          <JavaLogo className="java-logo" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Technologies;
