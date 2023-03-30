import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>

        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text} >
          Deserunt in ullamco velit cupidatat sint anim pariatur deserunt. Veniam
          qui veniam exercitation ullamco dolore duis in voluptate in aliqua
          tempor anim mollit veniam. Ad excepteur ad deserunt adipisicing. Id
          voluptate amet id cupidatat tempor ea et. Cupidatat labore est et aliqua
          mollit laborum est est ea ipsum eu tempor eiusmod eiusmod.
        </p>
        <p className={styles.text}>
          Deserunt in ullamco velit cupidatat sint anim pariatur deserunt. Veniam
          qui veniam exercitation ullamco dolore duis in voluptate in aliqua
          tempor anim mollit veniam. Ad excepteur ad deserunt adipisicing. Id
          voluptate amet id cupidatat tempor ea et. Cupidatat labore est et aliqua
          mollit laborum est est ea ipsum eu tempor eiusmod eiusmod.
        </p>
        <p className={styles.text}>
          Deserunt in ullamco velit cupidatat sint anim pariatur deserunt. Veniam
          qui veniam exercitation ullamco dolore duis in voluptate in aliqua
          tempor anim mollit veniam. Ad excepteur ad deserunt adipisicing. Id
          voluptate amet id cupidatat tempor ea et. Cupidatat labore est et aliqua
          mollit laborum est est ea ipsum eu tempor eiusmod eiusmod.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          see ninja listing
        </Link>

      </div>
    </>
  );
}


// 5 6 - + % _ = `