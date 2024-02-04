import Nav from "../components/Nav";
import '../styles/homePage.css';
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import OurServices from "../components/OurServices";
import Features from "../components/Features";
import Video from "../components/Video";
import OurTeam from "../components/OurTeam";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="home-page">
      <div className="top">
        <Nav />
        <Hero />
      </div>
      <WhoAreWe />
      <OurServices />
      <Features />
      <Video />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  )
};

export default HomePage;