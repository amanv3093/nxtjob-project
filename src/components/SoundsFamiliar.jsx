"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SoundsFamiliar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const boxContainerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref?.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      });
    } else {
    }
  }, [isIntersecting]);
  return (
    <section
      className="overflow-x-hidden mt-12 mb-32 lg:p-4 p-0 px-3 lg:px-20"
      ref={ref}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <motion.div
          className="inline-block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className=" text-[max(2.8vw,22px)] font-bold px-4 mb-5 text-center lg:text-start">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          className="ghost-red hidden md:block"
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -590],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -10],
            },
            hidden: {
              opacity: 0,
              scale: 0,
            },
          }}
        >
          <Image width={60} height={60} alt="" src="/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className=" lg:px-10 lg:py-10 px-2 py-2 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-250"
        ref={boxContainerRef}
      >
        <div className="rounded-xl bg-[#EEEBFE] min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image width={40} height={40} alt="" src="/Angry Emoji.png" />
          <h3 className="font-semibold text-base">
            You argue with a colleague
          </h3>
          <p className="text-gray-700 text-sm">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-[#6341EF] min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
          <Image width={40} height={40} alt="" src="/frowning.png" />
          <h3 className="font-semibold text-base text-white">
            You get a prmotion at work
          </h3>
          <p className="text-white text-sm">
            You question yourself and wonder unqualified imposter instead of
            trusting yourself & your abilites
          </p>
        </div>

        <div className="rounded-xl bg-[#FFEFD5] min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
          <Image
            width={40}
            height={40}
            alt=""
            src="/face_with_raised_eyebrow.png"
          />
          <h3 className="font-semibold text-base ">
            You attend a class reunion
          </h3>
          <p className="text-gray-700 text-sm">
            You compare yourelf with your peers your self judgement more
            indeoendent of others.
          </p>
        </div>

        <div className=" rounded-xl bg-[#FEF9EC] min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image width={40} height={40} alt="" src="/unamused.png" />
          <h3 className="font-semibold text-base">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700 text-sm">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-[#F2F8F8] min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={40}
            height={40}
            alt=""
            src="/Grinmacing Face Emoji.png"
          />
          <h3 className="font-semibold text-base">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700 text-sm">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoundsFamiliar;
