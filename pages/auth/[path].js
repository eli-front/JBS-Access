import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/ContactCounselor.module.css"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
    let [idNumber, setIDNumber] = useState("");
    let [lastName, setLastName] = useState("");

    const router = useRouter();
    const {path} = router.query;

    function sendEmail(e) {
        e.preventDefault();
        router.push(`../${path}`);
        
        // clear form
        setIDNumber("");
        setLastName("");
      }


    return (
       <Layout>
        <div id={styles.header_message}>Authenticate</div>
        <form id={styles.contact_form} onSubmit={sendEmail}>
            <label>Student ID:</label>
            <input
            type="text"
            id="idNumber"
            autoComplete="off"
            required
            value={idNumber}
            onChange={(e) => {
                setIDNumber(e.target.value);
            }}
            />
            <label>Last name:</label>
            <input
            type="text"
            id="lastName"
            autoComplete="off"
            required
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value);
            }}
            />
            <button>Login</button>
        </form>
       </Layout>
    );
}