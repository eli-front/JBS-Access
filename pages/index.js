import Image from "next/image";
import Layout from "../components/Layout";
import IconCard from "../components/home/IconCard";
import styles from "../styles/Home.module.css";
import ac_support from "../public/icons/ac-support.png";
import sport from "../public/icons/sport.png";
import art from "../public/icons/art.png";
import club_meeting from "../public/icons/club-meeting.png";
import other from "../public/icons/other.png";
import parent_meeting from "../public/icons/parent-meeting.png";
import restroom from "../public/icons/restroom.png";
import emergency from "../public/icons/emergency.png";
import counselor from "../public/icons/counselor.png";

export default function Home() {
  return (
    <Layout>
      <section id={styles.icon_card_section}>
        <IconCard
          icon={sport}
          label="Sport Events"
          link="events/sports"
        ></IconCard>
        <IconCard
          icon={counselor}
          label="Contact Counselor"
          link="auth/contact-counselor"
        ></IconCard>
        <IconCard
          icon={club_meeting}
          label="Club Meetings"
          link="events/clubs"
        ></IconCard>
        <IconCard icon={art} label="Art Events" link="events/art"></IconCard>
        <IconCard
          icon={ac_support}
          label="AC Support"
          link="auth/ac"
        ></IconCard>
        <IconCard
          icon={restroom}
          label="Restrooms"
          link="events/restrooms"
        ></IconCard>
        <IconCard
          icon={parent_meeting}
          label="Parent Meetings"
          link="events/parents"
        ></IconCard>
        <IconCard
          icon={emergency}
          label="Emergency"
          link="events/emergency"
        ></IconCard>
        <IconCard icon={other} label="Other" link="events/other"></IconCard>
      </section>
    </Layout>
  );
}
