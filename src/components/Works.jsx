import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import itch from "../assets/headshots/itch.png";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div>
        <h3 className="text-[#915EFF] font-black md:text-[35px] sm:text-[50px] xs:text-[40px] text-[30px]" style={{ paddingLeft: '20px' }}></h3>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://calvincash23.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={itch}
            alt="Path Weaver — Play on itch.io"
            className="max-w-full h-auto rounded shadow-lg"
          />
        </a>

        <p className="mt-3 text-sm text-white-100">Click the image to see the projects on itch.io</p>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
