import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Unity, useUnityContext} from "react-unity-webgl";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const {unityProvider}  = new useUnityContext({
    loaderUrl:"src/assets/unity_build/WebGL Builds.loader.js",
    dataUrl:"src/assets/unity_build/WebGL Builds.data.br",
    frameworkUrl:"src/assets/unity_build/WebGL Builds.framework.js.br",
    codeUrl:"src/assets/unity_build/WebGL Builds.wasm.br",
  });


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

    <div>
      <h3 className="text-[#915EFF] font-black md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]" style={{ paddingLeft: '20px' }}>Path Weaver</h3>
    </div>  

    <div className="flex justify-center">
        <Unity unityProvider={unityProvider} style={{ width: 1000, height: 600 }} />
    </div>
      
    </>
  );
};

export default SectionWrapper(Works, "");
