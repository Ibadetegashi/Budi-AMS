import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="http://phama.com.au/wp-content/uploads/2021/06/FoodTank_agriculturesubsidiesworldbankreport.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="http://phama.com.au/wp-content/uploads/2021/06/FoodTank_agriculturesubsidiesworldbankreport.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="http://phama.com.au/wp-content/uploads/2021/06/FoodTank_agriculturesubsidiesworldbankreport.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
