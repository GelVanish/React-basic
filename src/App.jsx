import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState("effect");

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <div>
      {visible && <Header />}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab == "feedback" && <FeedbackSection />}
        {tab == "effect" && <EffectSection />}
      </main>
    </div>
  );
}

export default App;
