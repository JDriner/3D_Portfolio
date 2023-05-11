
import { motion } from 'framer-motion';;

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { PlantsCanvas } from './canvas';
import { KintsugisCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[var(--red)]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>I am <span className="text-[var(--red)]">John Driner Familaran</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* <br className="sm:block hidden"/> */}
            Hey there! It's great to meet you! I'm a web developer, just recently graduated and super passionate about all things web development. Alongside coding, I also have a knack for graphic design which is always exciting. On a personal note, I love nothing more than a good cup of coffee and spending time surrounded by plants - they just bring so much joy to my day!
          </p>
        </div>
        <div>
        <KintsugisCanvas />
        </div>

        
      </div>

      {/* <ComputersCanvas /> */}

    
      <div className="absolute xs:button-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero