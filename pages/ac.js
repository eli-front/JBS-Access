import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import ACSupport from "../../lib/ACSupport";

export default function EventPage() {
  const router = useRouter();
  const { support } = router.query;
  const supports = [
    new ACSupport("Boys Varsity Lacrosse vs CBC", "4:30 pm"),
    new ACSupport("Varsity Water Polo vs Parkway Central", "4:30 pm"),
    new ACSupport("Girls JV Soccer vs Lindbergh", "5:15 pm"),
  ];

  return (
    <Layout>
      <h1>{support}</h1>
      {supports.map((support, index) => {
        return (
          <Card
            key={index}
            name={support.supportType}
            teacher={support.teacher}
          ></Card>
        );
      })}
    </Layout>
  );
}
