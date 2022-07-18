import React from "react";
import styled from "styled-components";

const AboutView1 = () => {
  return (
    <Wrapper>
      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          About <span> Us </span>{" "}
        </h1>

        <div class="row-1">
          <div class="image">
            <img src="images/home.jpg" alt="" />
          </div>

          <div class="content">
            <h3> History of agriculture </h3>
            <p>
              The development of agriculture about 12,000 years ago changed the
              way humans lived.
            </p>
            <div class="box-container">
              <div class="box">
                <p>
                  In business, as in life, there are very few truly
                  revolutionary events that forever change what was or what will
                  be. With its history of disrupting nearly every industry it
                  has penetrated, e-commerce continues to be one of these
                  lasting forces.{" "}
                </p>
              </div>
              <div class="box">
                <p>
                  And with its ongoing progression into agriculture, it is
                  increasingly imperative that agrimarketers and agribusinesses
                  alike understand the changes that e-commerce has and will
                  continue to bring to our industry.
                </p>
              </div>
              <div class="box">
                <p>
                  When you hear the term “e-commerce”, you probably think first
                  about online, consumer-oriented stores like Amazon or eBay.
                  While these may be the “poster children” of e-commerce, they
                  paint a very limited picture of what it truly entails. In
                  reality, e-commerce is defined as any commercial transaction
                  conducted electronically,{" "}
                </p>
              </div>
              <div class="box">
                <p>
                  and therefore includes things such as online trading, digital
                  subscription services and even email and text-based
                  transactions. So, when you consider the larger definition of
                  e-commerce, you can see that its presence in agriculture is
                  not as new as one might think.
                </p>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about .row-1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-bottom: 2rem;
  }

  .about .row-1 .image {
    flex: 1 1 25rem;
  }

  .about .row-1 .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border: 1rem solid #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  .heading {
    color: green;
  }
  .about .row-1 .content {
    flex: 1 1 50rem;
  }

  .about .row-1 .content h3 {
    color: #111;
    font-size: 3.5rem;
  }

  .about .row-1 .content p {
    color: #666;
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }

  .about .row-1 .content .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0.5rem 0;
  }

  .about .row-1 .content .box-container .box {
    flex: 1 1 20rem;
  }

  .about .row-1 .content .box-container .box span {
    color: green;
  }

  .about .row-2 {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
  }

  .about .row-2 .box-container {
    flex: 1 1 40rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .about .row-2 .box-container .box {
    flex: 1 1 15rem;
    background: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }

  .about .row-2 .box-container .box h3 {
    color: var(--main-color);
    font-size: 3rem;
  }

  .about .row-2 .box-container .box p {
    color: #666;
    font-size: 1.7rem;
    padding-top: 0.5rem;
  }
`;
export default AboutView1;
