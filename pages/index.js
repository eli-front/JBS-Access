import Image from "next/image";
import Layout from "../components/Layout";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
    return ( <
        Layout >
        <
        h1 > New Home Page < /h1> <
        Card name = "Test Event Card"
        location = "at a location"
        time = "at time x:xx pm" >
        < /Card> <
        /Layout>
    );
}