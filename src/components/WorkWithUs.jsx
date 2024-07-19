"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const WorkWithUs = () => {
  let [textData] = useState([
    {
      text1: "Power through, even when the going gets tough",
      text2:
        "We helps you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
      text1: "Learn more about who you are and where you want to go",
      text2:
        "We ask the right questions to help you better understand why you do things the way you do.",
    },
    {
      text1: "Play and grow together with others on the same journey",
      text2:
        "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
    },
    {
      text1:
        "Learn about practical skills that you can actually use in real life",
      text2:
        "We teach you smart psychological techniques and habit-farming strategies that are easy to apply.",
    },
    {
      text1: "Get support that's made for you needs",
      text2:
        "we build you personal roadmap of lessons and action towards your goals.",
    },
  ]);

  return (
    <div className="lg:px-20 px-3 my-32">
      <section className="mt-16 rounded-2xl bg-[#F3F1FF] xl:p-12 xl:px-16 p-4 px-4">
        <div className="flex  justify-between items-center text-[max(3.1vw,22px)] font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="">Work with us</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-[#6341EE]">ahead</span>
          </motion.div>
        </div>
        <div className="mt-12 flex lg:flex-row flex-col gap-20 overflow-hidden">
          <div className="grow">
            <div className="rounded-2xl bg-white  pt-8 lg:max-w-[30rem] max-w-full shadow-lg">
              <motion.div
                className="pl-4 inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 4 }}
                variants={{
                  visible: {
                    opacity: [0.8, 0.9, 1.01, 1],
                    scale: [0.6, 0.55, 0.8, 1],
                    rotate: [0, 45, -35, 10, 0],
                  },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <Image width={30} height={30} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4">
                <h2 className="font-medium text-xl">About</h2>
                <p className="font-normal text-[#37383C] leading-7">
                  At ahead our goal is to make self-improvement fun and lasting.
                  We know there's a way how to make it work. And that's what
                  aHead is all about!
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8  p-4 rounded-2xl  mt-8 bg-orange-50">
                <h2 className="font-medium text-xl">Product</h2>
                <p className="font-normal text-[#37383C] leading-7">
                  Sure, you could spend ages reading books or sitting in
                  seminars on how to become a better spouse, parent, or
                  manager-like we did...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto pr-6 custom-scrollbar">
            {textData.map((val, index) => (
              <div
                className="p-7 bg-white rounded-2xl space-y-6 w-[20rem]"
                key={index}
              >
                <h2 className="font-bold text-sm">{val.text1}</h2>
                <p className="font-medium text-[#37383C] text-xs ">
                  {val.text2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
