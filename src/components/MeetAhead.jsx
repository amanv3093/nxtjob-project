"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetAhead = () => {
  return (
    <div className="lg:px-20 px-3 relative mt-7 mb-32">
      <div className="bg-[#FEF7F1] lg:h-[450px] overflow-hidden relative flex flex-col lg:flex-row rounded-3xl">
        <div className=" basis-1/2 px-7">
          <div className="flex flex-col mt-20 gap-3">
            <div>
              <p className="text-sm lg:text-left text-center">
                Built Out of Frustration
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold lg:text-left text-center">
                Meet the ahead app
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center pb-11 pt-[17rem] lg:pb-0 lg:pt-0">
          <div className="flex flex-col gap-6 lg:w-4/5 w-full   items-center text-[#37383C]">
            <div className="">
              <p className="text-lg lg:text-left text-center">
                A personalized pocket coach that provide
                bite-sized,science-driven tools to boost emotional intelligence.
              </p>
            </div>
            <div>
              <p className="text-lg lg:text-left text-center">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling.
              </p>
            </div>
          </div>
        </div>

        {/* circle div  */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
              x: [0, -550],
              y: [55, -18],
            },
          }}
          animate={{
            x: [0, -550],
            y: [55, -18],
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-darkPeach h-60 w-60 absolute rounded-full"
          style={{ bottom: "-16px", right: "650px" }}
        ></motion.div>

        {/* leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -25],
              rotate: 8,
            },
            hidden: { y: 55 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="h-28 w-24 absolute hidden lg:block"
          style={{
            right: "67%",
            bottom: "13%",
            transform: "translate(50%,50%)",
          }}
        >
          <Image height={100} width={100} src="/leaf.png" alt="" />
        </motion.div>

        {/*GHost Div  */}
        <div
          style={{ transform: "translate(-50%,-50%)" }}
          className="absolute top-[46%] left-[50%] lg:top-[62%] lg:left-[15%]  flex justify-center items-center rounded-full bg-white h-44 w-44 border-[10px] border-[#F6F6F6]"
        >
          <motion.div
            transition={{ duration: "1.5" }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-20 w-16 inline-block"
          >
            <Image
              height={100}
              width={100}
              src="/newGhost.png"
              className="h-full w-full"
              alt=""
            />
          </motion.div>
          {/*Badge*/}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              delay: "0.5",
            }}
            className="absolute h-11 w-11"
            style={{ top: "-22px" }}
          >
            <Image height={100} width={100} src="/badge.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/* flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 2,
        }}
        style={{ right: "280px", top: "-20px" }}
        className="h-11 w-11 absolute "
      >
        <Image height={100} width={100} src="/flower.png" alt="" />
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 380 },
          hidden: { opacity: 1 },
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 2,
        }}
        style={{ right: "320px", top: "60px" }}
        className="h-11 w-11 absolute hidden lg:block"
      >
        <Image height={100} width={100} src="/singleLeaf.png" alt="" />
      </motion.div>
    </div>
  );
};

export default MeetAhead;
