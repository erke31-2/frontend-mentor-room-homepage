import BotComponent from "./components/BotComponent";
import TopComponent from "./components/TopComponent";
import { useState } from "react";
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="max-w-[375px] mx-auto grid grid-cols-1 lg:grid-cols-5 lg:min-w-full min-h-screen relative font-leagueSpartan">
      {isOpen && <div className="absolute inset-0 z-20 bg-VeryDarkGray/80 scroll-smooth"></div>}
      <TopComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <BotComponent />
    </main>
  );
};
export default App;
