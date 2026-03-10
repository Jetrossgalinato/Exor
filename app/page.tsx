import DarkLightRays from "@/components/dark-light-rays";
import Header from "@/components/header";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 pointer-events-none">
        <DarkLightRays />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <Header />
        <Services />
      </div>
    </div>
  );
}
