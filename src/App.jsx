import Features from "./components/Features"
import Hero from "./components/Hero"
import HighLights from "./components/HighLights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default App
