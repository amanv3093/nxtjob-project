import Image from "next/image";
import Navbar from "../components/Navbar";
import MasterLife from "../components/MasterLife";
import BeastsIQ from "../components/BeastsIQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <MasterLife />
      <BeastsIQ />
    </>
  );
}
