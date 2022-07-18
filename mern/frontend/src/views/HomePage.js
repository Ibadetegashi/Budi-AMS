import { Helmet } from "react-helmet-async";
import Slider from "../components/Slider";
import HomeView from "./HomeView";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>BUDI</title>
      </Helmet>
      <Slider />
      <Container className="mt-3">
      <HomeView />
      </Container>
    </div>
  );
}
export default HomePage;
