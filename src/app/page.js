import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <div className="h-full">
      <Hero></Hero>
      <CallToAction></CallToAction>
    </div>
  );
}