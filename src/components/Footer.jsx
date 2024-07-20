import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300  py-14 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <Image width={50} height={50} alt="" src="/ahead-logo.png" />
      </p>
      <p className="text-xl font-bold text-[#6341EE] pt-2 text-center">ahead</p>
      <div className="flex gap-8 items-center flex-col md:flex-row justify-center mt-5 font-semibold">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="w-3" />

          <p className="text-xs">AuguststraBe 26, 10117 Berlin</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="w-3" />
          <p className="text-xs">hi@ahead-app.com</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/appleStoreIcon.svg"
          alt="download applestore"
          width={120}
          height={120}
        />
      </div>
      <div className="text-center text-xs text-gray-500">
        &copy; 2024 Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
