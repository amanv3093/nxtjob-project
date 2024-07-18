import Image from "next/image";
import Navbar from "../components/Navbar";
import MasterLife from "../components/MasterLife";
import BeastsIQ from "../components/BeastsIQ";
import SoundsFamiliar from "../components/SoundsFamiliar";
import MeetAhead from "../components/MeetAhead";
import SelfImprovement from "../components/SelfImprovement";

export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <BeastsIQ />
      <SoundsFamiliar />
      <MeetAhead />
      <SelfImprovement />
    </>
  );
}
