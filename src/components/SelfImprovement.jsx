"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fade from "react-awesome-reveal";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    // transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;
const SelfImprovement = () => {
  let [textData, setTextData] = useState([
    {
      text1: "It's not easy as 1-2-3",
      text2:
        " The journey may be long but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
      text1: "Old habits are hard to break.",
      text2:
        "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",
    },
    {
      text1: "You ans your motivation don't have a long-term relationship.",
      text2:
        "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.",
    },
    {
      text1: "Books just don't offer practical",
      text2:
        "Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
    },
    {
      text1: "Inspiration is great, but then what.",
      text2:
        "We make sure your energy from all the content you consume does not fizzle out.",
    },
  ]);
  return (
    <section className="lg:px-20 px-3 mt-10 mb-24 ">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block w-full lg:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-base font-medium text-black pb-2 text-center lg:text-start">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>

          <div className="text-[max(2.9vw,28px)] text-center lg:text-start pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -650],
              y: [35, 20, 10, 0, 9],
              rotate: [-60, -45, -35, -35, -35, -35, -5],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="blue-ghost1 items-center justify-center hidden lg:flex"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={50}
            height={50}
          />
        </motion.div>
      </div>

      <div className="timeline lg:px-20 px-3 pt-14 h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
          <Reveal keyframes={customAnimation}>
            {textData.map((e, index) => (
              <div key={index}>
                <motion.div className=" max-w-[40rem] relative align-top pl-8">
                  <div
                    style={{
                      left: "-9px",
                      boxShadow: " 0px 0px 5px 8px rgb(228 234 231)",
                    }}
                    className="absolute w-4 h-4 bg-[#6641F4] rounded-full"
                  ></div>
                  <p className="text-xl font-bold">{e.text1}</p>
                  <p className="mt-3">{e.text2}</p>
                </motion.div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;
