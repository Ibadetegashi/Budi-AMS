import React from "react";
import styled from "styled-components";
import AboutView1 from "./AboutView1";

const AboutView = () => {
  return (
    <Wrapper>
      <section class="home" id="home">
        <div class="content">
          <h3>
            {" "}
            <span>Budi AMS </span>{" "}
          </h3>
          <p class="info"> Agro Managment System </p>
          <p class="text">
            {" "}
            Agro System is a world leader in development and production of egg
            counter and related system. In the year 2000 Agro system was set up
            by 3 experts in the layer and breeder industry in order to develop
            the best and most precise egg counter in the world. After 5 years in
            research and development, field test was done in Japan, which is the
            most difficult market for these devices.After thousands of
            installations in Japan the Mark 5 was released for the world
            market.After a few more years the N series was developed.{" "}
          </p>
          <a href="#about" class="btn">
            About Us
          </a>
        </div>

        <div class="image">
          <img src="images/home.png" alt="" />
        </div>
      </section>
      <AboutView1></AboutView1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    padding: 1rem 5%;
    min-height: 100vh;
  }

  .home {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .home .image {
    flex: 1 1 40rem;
  }

  .home .image img {
    width: 100%;
  }

  .home .content {
    flex: 1 1 40rem;
  }

  .home .content .hi {
    font-size: 2rem;
    color: #e38528;
  }

  .home .content h3 {
    font-size: 2rem;
    color: #111;
    text-transform: uppercase;
  }

  .home .content h3 span {
    color: green;
    text-transform: uppercase;
  }

  .home .content .info {
    font-size: 2rem;
    color: #111;
    padding: 0.5rem 0;
  }

  .home .content .text {
    font-size: 1rem;
    color: #666;
    padding: 0.5rem 0;
  }
  .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    background: green;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn:hover {
    background: #111;
    letter-spacing: 0.2rem;
  }
`;
export default AboutView;
