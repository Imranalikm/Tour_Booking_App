import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../assets/images/hero-img01.jpg";
import HeroImg1 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import WorldImg from "../assets/images/world.png";
const Home = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"} />
                <img src={WorldImg} alt="" />
              </div>
              <h1>
                Traveling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus facilis voluptatem, numquam eligendi a eveniet deserunt
                quam molestias dolores similique assumenda doloremque enim
                cupiditate autem quae dolorum libero. Fugit, repudiandae!
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
                <img src={HeroImg} alt="" />
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4">
                <video src={heroVideo} alt=""  controls/>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5 ">
                <img src={HeroImg1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
