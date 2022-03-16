import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import DirectionCard from "../../components/directions/DirectionCard";
import leftArrow from "../../public/icons/arrows/left.png";
import rightArrow from "../../public/icons/arrows/right.png";
import upArrow from "../../public/icons/arrows/up.png";

export default function Directions() {
  const router = useRouter();
  const { direction } = router.query;

  return (
    <Layout>
      <h1>{direction}</h1>
      <DirectionCard
        text="test text"
        direction="left"
        directionImage={leftArrow}
      ></DirectionCard>
      <DirectionCard
        text="test text"
        direction="left"
        directionImage={rightArrow}
      ></DirectionCard>
      <DirectionCard
        text="test text"
        direction="left"
        directionImage={upArrow}
      ></DirectionCard>
    </Layout>
  );
}
