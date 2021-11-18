import React from "react";
import {Carousel} from "react-bootstrap";


export function MainPageSlider() {
    return (
        <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tehnot.com/wp-content/uploads/2017/08/ecommerce-trends-2016.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ecommerce platform</h3>
              <p>The easiest way to buy clothes you want!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://securenews.ru/wp-content/uploads/2018/03/online-shopping-ecommerce-ss-1920_1.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Ecommerce platform</h3>
              <p>Free end to end solution for your e-commerce business. Create & sell online</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </React.Fragment>
    )
}