import Layout from "../components/Layout";
import styles from "../styles/ContactCounselor.module.css";
import { useState } from "react";

export default function ContactCounselor() {
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");

  let [messageSent, setMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setMessageSent(true);

    // clear form
    setName("");
    setLocation("");
  }
  return (
    <Layout>
      <form id={styles.contact_form} onSubmit={sendEmail}>
        <label>What&apos;s your name?</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Where are you?</label>
        <input
          type="text"
          id="location"
          autoComplete="off"
          required
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button>send a counselor</button>
      </form>

      {messageSent && (
        <p id={styles.confirmation_message}>
          Your message was sent. The counselor will be with you ASAP.
        </p>
      )}
    </Layout>
  );
}
