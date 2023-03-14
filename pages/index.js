import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      Welcome to Next.js! <Image src="/images/profile.jpg" width={200} height={200} />
    </div>
  );
}
