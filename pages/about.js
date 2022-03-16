import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <Layout>
      <div id={styles.about_header}>
        <h1>About JBS Access</h1>
      </div>

      <p id={styles.about_body}>
        The John Burroughs community is very fortunate to have access to a
        beautiful campus and resources for students. On campus there are
        elevators, ramps, and gender-neutral bathrooms. However, despite having
        these resources, it can be challenging for our visitors and people
        within our community to become familiar with them. At the forefront of
        our website is accessibility; through thoughtful design we created a
        navigation system that highlights routes suitable for wheelchairs,
        mobility aids, and strollers- door types, stairs, and entrance width
        were all taken into account. We are so grateful to have you as a part of
        our community- please explore the site and our campus!
      </p>
    </Layout>
  );
}
