import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import DirectionCard from "../../components/directions/DirectionCard";
import Direction, { DirectionTypes } from "../../lib/Direction";
import locationMarker from "../../public/icons/locationMarker.png";
import styles from "../../styles/DirectionPage.module.css";

import direction1 from "../../public/images/1_arrow.png";
import direction2 from "../../public/images/2_arrow.png";
import direction3 from "../../public/images/3_arrow.png";
import direction4 from "../../public/images/4_arrow.png";
import direction5 from "../../public/images/5_arrow.png";
import direction6 from "../../public/images/6_arrow.png";
import direction7 from "../../public/images/7_arrow.png";
import direction8 from "../../public/images/8_arrow.png";
import direction9 from "../../public/images/9_arrow.png";
import direction10 from "../../public/images/10_arrow.png";
import direction11 from "../../public/images/11_arrow.png";

export default function Directions() {
  const router = useRouter();
  const { direction } = router.query;

  const directionsArray = [
    new Direction(DirectionTypes.FORWARD, "go through the lobby", direction1),
    new Direction(DirectionTypes.LEFT, "go through the hallway", direction2),
    new Direction(DirectionTypes.RIGHT, "turn right at the doors", direction3),
    new Direction(DirectionTypes.FORWARD, "go into the elevator", direction4),
    new Direction(
      DirectionTypes.RIGHT,
      "turn right after the double doors",
      direction5
    ),
    new Direction(
      DirectionTypes.RIGHT,
      "turn right at the end of the hallway",
      direction6
    ),
    new Direction(
      DirectionTypes.LEFT,
      "go left at the fellow office",
      direction7
    ),
    new Direction(
      DirectionTypes.RIGHT,
      "turn right past the double doors",
      direction8
    ),
    new Direction(DirectionTypes.LEFT, "turn left at the wall", direction9),
    new Direction(
      DirectionTypes.RIGHT,
      "go right into the entryway",
      direction10
    ),
    new Direction(
      DirectionTypes.FORWARD,
      "go through the double doors",
      direction11
    ),
  ];

  return (
    <Layout>
      <header id={styles.header}>
        <Image
          src={locationMarker}
          width={40}
          height={40}
          alt="location marker"
          visual={direction1}
        ></Image>
        <h1>{direction}</h1>
      </header>
      <div id={styles.directions_container}>
        {directionsArray.map((direction, index) => {
          return (
            <DirectionCard
              key={index}
              visual={direction.visual}
              direction={direction.direction}
              directionImage={direction.directionImage}
              text={direction.text}
            ></DirectionCard>
          );
        })}
      </div>
    </Layout>
  );
}
