import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio"
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import About from "../components/About";
import Social from "../components/Social";
import Footer from "../components/Footer";
import SocialLinks from "../components/Links/SocialLinks";

export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <Experience />
      </div>
      <Portfolio />
      <Skill />
      <About />
      <Social />
      <Footer />
      <SocialLinks/>
    </>
  )
}