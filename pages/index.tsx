import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.scss";
import About from "../component/About";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
