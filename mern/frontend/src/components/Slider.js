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
          <h3>Green land label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://th.bing.com/th/id/R.3bee7b882b4f0f4a597a6a13a6e75ff2?rik=5yhE0sanrRM6vg&riu=http%3a%2f%2ffw-d7-freedomworks-org.s3.amazonaws.com%2ffield%2fimage%2ffarm.jpeg&ehk=yxLUZhhjhNlKgI%2bOJoXEHe%2fuCq9G3VJelXald4Cdz9c%3d&risl=&pid=ImgRaw&r=0"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />

        <Carousel.Caption>
          <h3>Farm label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://modernfarmer.com/wp-content/uploads/2020/09/shutterstock_1218712885.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />

        <Carousel.Caption>
          <h3>Cows label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
