import { SpeedInsights } from "@vercel/speed-insights/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Apropos from "./components/Apropos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section id="apropos"></section>
    <Header />
    <Apropos />
    <MainContainer />
    <Footer />
    <SpeedInsights />
  </StrictMode>
);
