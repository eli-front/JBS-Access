import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Event from "../../lib/Event";

export default function EventPage() {
  const router = useRouter();
  const { event } = router.query;
  const events = [
    new Event("Boys Varsity Lacrosse vs CBC", "4:30 pm", "Leland Field"),
    new Event("Varsity Water Polo vs Parkway Central", "4:30 pm", "Natatorium"),
    new Event("Girls JV Soccer vs Lindbergh", "5:15 pm", "Beckman Field"),
    new Event("Boys Varsity Tennis vs Rockhurst", "4:15 pm", "Lee Tennis Complex"),
    new Event("Boys C Baseball vs Webster Groves", "4:30 pm", "McConnell Baseball Field"),
    new Event("Girls Varsity Track", "4:00 pm", "Keefer Track"),
    new Event("Girls JV Lacrosse vs Cor Jesu", "5:30 pm", "Lacrosse Field"),
  ];

  return (
    <Layout>
      <h1>{event}</h1>
      {events.map((event, index) => {
        return (
          <Card
            key={index}
            name={event.eventName}
            location={event.loc}
            time={event.startTime}
          ></Card>
        );
      })}
    </Layout>
  );
}
