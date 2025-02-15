import Hero from "./components/Hero";
import NationalInfo from "./components/NationalInfo";
import Certification from "./components/Certification";
import Clients from "./components/Clients";

export default function Home() {
  return (
    <div>
      <Hero />
      <NationalInfo/>
      <Certification/>
      <Clients/>
    </div>
  );
}