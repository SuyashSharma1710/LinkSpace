import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes and update form state
  

  // Handle form submission
  

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >

          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div
              className='w-28 h-28 cursor-pointer'
              key={technology.name}
              onClick={() => window.open(technology.url, '_blank')}
              >
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>

      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
