import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Unity, useUnityContext } from "react-unity-webgl";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const unityContainerRef = useRef(null);
  const { unityProvider } = new useUnityContext({
    loaderUrl: "/unityBuild/WebGLBuilds.loader.js",
    dataUrl: "/unityBuild/WebGLBuilds.data.br",
    frameworkUrl: "/unityBuild/WebGLBuilds.framework.js.br",
    codeUrl: "/unityBuild/WebGLBuilds.wasm.br",
  });
  

  const handleFullscreen = () => {
    if (unityContainerRef.current) {
      const unityElement = unityContainerRef.current.querySelector('canvas');
      if (unityElement.requestFullscreen) {
        unityElement.requestFullscreen();
      } else if (unityElement.mozRequestFullScreen) { // Firefox
        unityElement.mozRequestFullScreen();
      } else if (unityElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        unityElement.webkitRequestFullscreen();
      } else if (unityElement.msRequestFullscreen) { // IE/Edge
        unityElement.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div>
        <h3 className="text-[#915EFF] font-black md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]" style={{ paddingLeft: '20px' }}>Path Weaver</h3>
      </div>

      <div className="flex justify-center">
        <div ref={unityContainerRef}>
          <Unity unityProvider={unityProvider} style={{ width: 1000, height: 600 }} />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button 
          onClick={handleFullscreen}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Fullscreen
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
