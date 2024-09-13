import Header from "./components/Header"
import TeachingSection from "./components/Button/TeachingSection";
import DifferencesSection from "./components/Button/DifferencesSection";
import IntroSection from "./components/Button/introSection";


function App() {
  return (
    <div>
      <Header />
      <main>
          <IntroSection />
          <TeachingSection />
          <DifferencesSection />
      </main>
    </div>  
  )
}

export default App
