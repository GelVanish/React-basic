import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <div>
      <Header />
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
      </main>
    </div>
  );
}

export default App;
