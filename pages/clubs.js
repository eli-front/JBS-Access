import styles from "../styles/Clubs.module.css"; 
import Layout from "../components/Layout";
import Link from "next/link";
import Card from "../components/Card";

export default function Clubs() {
  return (   
      <Layout>  
        <h1 id={styles.clubTitle}>Meetings Today</h1>
            <Card
                name="Robotics"
                location="Room S102"
                time="12:00pm"
            ></Card>

            <Card
                name="MUN Impact"
                location="Room S314"
                time="2:00pm"
            ></Card>

            <Card
                name="WWT Hackathon"
                location="Room S214"
                time="12:00pm"
            ></Card>

            <Card
                name="The Review"
                location="Room 207"
                time="4:00pm"
            ></Card>
  
        </Layout>

  );
}


 

