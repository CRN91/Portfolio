import React from 'react';
import { SiPython, SiC, SiMysql, SiHaskell, SiReact, SiPandas, SiGodotengine, SiLinux, SiGnubash, SiGit, SiJavascript } from '@icons-pack/react-simple-icons';
import './Technologies.css';
import { ReactComponent as JavaLogo } from './java.svg';

const Technologies = () => {
  return (
    <>
    <h2 className="technologies-title">Technologies I've worked with</h2>
    <div className="technologies-container">
      <div className="icon-grid-container">
        <div className="icon-item" data-tooltip="Haskell" alt="Haskell">
          <SiHaskell />
        </div>
        <div className="icon-item" data-tooltip="Godot" alt="Godot">
          <SiGodotengine />
        </div>
        <div className="icon-item" data-tooltip="Git" alt="Git">
          <SiGit />
        </div>
        <div className="icon-item" data-tooltip="Linux" alt="Linux">
          <SiLinux />
        </div>
        <div className="icon-item" data-tooltip="Bash" alt="Bash">
          <SiGnubash />
        </div>
        <div className="icon-item" data-tooltip="C" alt="C">
          <SiC />
        </div>
        <div className="icon-item" data-tooltip="Python" alt="Python">
          <SiPython />
        </div>
        <div className="icon-item" data-tooltip="Pandas" alt="Pandas">
          <SiPandas />
        </div>
        <div className="icon-item" data-tooltip="MySQL" alt="MySQL">
          <SiMysql />
        </div>
        <div className="icon-item" data-tooltip="React" alt="React">
          <SiReact />
        </div>
        <div className="icon-item" data-tooltip="Javascript" alt="Javascript">
          <SiJavascript />
        </div>
        <div className="icon-java" data-tooltip="Java" alt="Java">
          <JavaLogo />
        </div>
      </div>
    </div>
    </>
  );
}

export default Technologies;
