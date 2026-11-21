import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function Ambient() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <motion.div
        className="absolute -top-40 -left-24 h-[34rem] w-[34rem] rounded-full bg-indigo-200/70 blur-3xl"
        animate={reduce ? undefined : { x: [0, 70, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-purple-200/70 blur-3xl"
        animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 70, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-100/80 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function CursorGlow() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (event) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden h-[440px] w-[440px] rounded-full bg-indigo-200/50 blur-3xl md:block"
    />
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-indigo-600"
    />
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans text-gray-900 antialiased">
      <Ambient />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
