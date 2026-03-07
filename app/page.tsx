import DarkLightRays from "@/components/dark-light-rays";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <DarkLightRays />
      <div className="absolute inset-0 flex items-center justify-center">
        <Header />
      </div>
    </div>
  );
}
