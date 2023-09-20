import Navbar from "./Components/NAVBAR/Navbar";
import "./App.css"
import Hero from "./Components/Hero/Hero";
import CardSection from "./Components/Hero/CardSection";
import DataCard from "./Components/DATA/DataCard";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <DataCard />
    </>
  );
}

export default App;
