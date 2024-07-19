import Image from "next/image";
import Navbar from "../components/Navbar";
import MasterLife from "../components/MasterLife";
import BeastsIQ from "../components/BeastsIQ";
import SoundsFamiliar from "../components/SoundsFamiliar";
import MeetAhead from "../components/MeetAhead";
import SelfImprovement from "../components/SelfImprovement";
import BestYouEQ from "../components/BestYouEQ";
import AnonymousBox from "../components/AnonymousBox";
import TestBox from "../components/TestBox";
import WorkWithUs from "../components/WorkWithUs";
import OpenVacancies from "../components/OpenVacancies";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <BeastsIQ />
      <SoundsFamiliar />
      <MeetAhead />
      {/*<SelfImprovement />
      <BestYouEQ />
      <AnonymousBox />
      <TestBox />
      <WorkWithUs />
      <OpenVacancies />
      <Footer /> */}
    </>
  );
}
