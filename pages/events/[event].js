import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter();
  const { event } = router.query;
  return (
    <Layout>
      <h1>{event}</h1>
    </Layout>
  );
}
