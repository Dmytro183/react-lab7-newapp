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
            <h3>nakolesah.net.ua — шини, диски та олива для твого авто!</h3>
            <p>📦 Доставка по Україні</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Tyre2Img} alt="Mushrooms" />
          <Carousel.Caption>
            <h3>📦 Доставка по Україні</h3>
            <p>💧 Якісна моторна олива</p>
          </Carousel.Caption>
        </Carousel.Item>
          
      </Carousel>
    );
  }
}
