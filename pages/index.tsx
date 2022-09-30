import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
