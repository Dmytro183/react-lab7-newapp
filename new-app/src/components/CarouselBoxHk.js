import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import Tyre1Img from '../assets/111.jpg';
import Tyre2Img from '../assets/222.jpg';
import Tyre3Img from '../assets/333.jpg';

export default class CarouselBoxHk extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Tyre1Img} alt="Ocean" />
          <Carousel.Caption>
            <h3>Ocean image</h3>
            <p>Цитата про море...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Tyre2Img} alt="Mushrooms" />
          <Carousel.Caption>
            <h3>Mushrooms image</h3>
            <p>Цитата про гриби...</p>
          </Carousel.Caption>
        </Carousel.Item>
          
      </Carousel>
    );
  }
}
