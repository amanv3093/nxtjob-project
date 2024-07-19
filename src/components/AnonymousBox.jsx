"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
const AnonymousBox = () => {
  return (
    <section className="mt-16 mb-32 rounded-3xl bg-blue-50 p-10 lg:mx-24 mx-3">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <h3 className="text-center text-gray-600 text-base font-semibold">
          Let your friends, family, and co-worker (anonymously) rate your social
          skills
        </h3>
        <h1 className="text-[max(2.4vw,22px)] font-bold text-center mt-4">
          Ever wondered what others think of you?
        </h1>
      </motion.div>
      <div className="mt-8 flex justify-center relative">
        <div className="absolute top-[1.5rem] lg:w-[780px] w-full text-transparent border-t border-[#ffce9e] h-4 border-dashed"></div>
        <div className="flex justify-evenly items-start w-[70rem] z-[10]">
          <div className="flex flex-col md:justify-center justify-start">
            <div className="flex justify-center">
              <div className="pb-3">
                <Image width={50} height={50} alt="" src="/1st-prize.png" />
              </div>
            </div>
            <div className="text-center text-xs pt-3">
              Answer questions on your skill.
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image width={50} height={50} alt="" src="/2nd-place.png" />
              </div>
            </div>
            <div className="text-center text-xs pt-3">
              Let other anonymously answer the <br /> same questions about you
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="">
                <Image width={50} height={50} alt="" src="/3rd-place.png" />
              </div>
            </div>
            <div className="text-center text-xs pt-3">
              Find out where you and others see things <br /> the same way-and
              where not!
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-16 shadow bg-white rounded-xl w-[50rem] p-6 py-24 relative">
          <div className="flex justify-between ">
            <div className="h-4 w-4 rounded-full bg-violet-600 z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, scale: 0.5 },
                }}
              >
                <div className="absolute text-white p-2 bg-violet-600 rounded-lg lg:text-base text-[10px] top-[-3rem] left-[-3rem]">
                  You
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-[#40C2FC] z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute whitespace-nowrap text-white p-2 bg-[#40C2FC] rounded-lg lg:text-base text-[10px] top-[2rem] lg:left-[82%] -left-14">
                  Anonymonos 1
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-[#FDB338] z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute  whitespace-nowrap  text-white p-2 bg-[#FDB338] rounded-lg lg:text-base text-[10px] top-[-3rem] left-[0.5rem]">
                  Anonymonos 2
                </div>
              </motion.div>
            </div>
            <div className="h-4 w-4 rounded-full bg-[#58C896] z-10 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute  whitespace-nowrap   text-white p-2 bg-[#58C896] rounded-lg lg:text-base text-[10px]  top-[2rem]  lg:left-[82%] left-[-3rem]">
                  Anonymonos 3
                </div>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-yellow-700 h-1 absolute top-[50%]  lg:w-[780px] w-[91%] line1"></div>
        </div>
      </div>
    </section>
  );
};

export default AnonymousBox;
