import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>JBS Access</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      {children}
    </>
  );
}
