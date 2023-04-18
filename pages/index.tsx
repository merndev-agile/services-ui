import { SlidingPanel } from "@/components/SlidingPanel/SlidingPanel";
import { EnvironmentStatement } from "@/screens/EnvironmentStatement/EnvironmentStatement";
import { FAQ } from "@/screens/FrequentlyAskedQuestion/FAQ";
import { Header } from "@/screens/Header/Header";
import { Services } from "@/screens/Services/Services";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Header menuLink="/menu" menuIcon="/icons/menu-icon.png" menuIconWidth={18} menuIconHeight={7}/>
      <div className="w-full flex flex-col">
      <Services />
      <SlidingPanel />
      <EnvironmentStatement />
      <FAQ />
      </div>
    </div>
  );
}
