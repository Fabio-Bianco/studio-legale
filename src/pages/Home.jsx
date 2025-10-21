import Header from "../components/layout/Header.jsx";
import Hero from "../components/sections/Hero.jsx";
import Team from "../components/sections/Team.jsx";
import Main from "../components/sections/Main.jsx";
import Footer from "../components/layout/Footer.jsx";
import CustomCursor from "../components/desktop/CustomCursor.jsx";
import ScrollProgress from "../components/desktop/ScrollProgress.jsx";

export default function Home() {
  return (
    <>
      {/* Desktop Premium UX Components */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Main Layout */}
      <Header />
      <Hero />
      <Team />
      <Main />
      <Footer />
    </>
  );
}
