import Layout from "../components/Layout";
import image404 from "../public/images/404.svg";
import Image from "next/image";

export default function PageNotFound() {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL and
        try again.
      </p>
      <Image src={image404} width={500} height={500} alt="404"></Image>
    </Layout>
  );
}
