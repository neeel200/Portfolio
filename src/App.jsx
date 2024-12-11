import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import {ThemeProvider } from "./context/ThemeContext.jsx";
function App() {
  return (
    <div className={styles.App}>
      <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
