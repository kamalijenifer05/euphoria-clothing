"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const slider = useRef(null);
  const router = useRouter();
  const slides = [
    {
      title: "T-Shirts / Tops",
      subtitle: "Summer Value Pack",
      content: "Cool / Colorful / Comfy",
      image: "/images/bg-1.png",
    },
    {
      title: "Hoodies / Jackets",
      subtitle: "Winter Wear",
      content: "Warm / Stylish / Soft",
      image: "/images/bg-2.png",
    },
    {
      title: "Sneakers / Accessories",
      subtitle: "Outdoor Essentials",
      content: "Durable / Stylish / Comfortable",
      image: "/images/bg-3.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const handleShop = () => {
    router.push("/women");
  };

  return (
    <CarouselContainer>
      <Slider {...settings} ref={slider}>
        {slides.map((slide, index) => (
          <Slide key={index} bgimage={slide.image}>
            <ContentBox>
              <Heading1>{slide.title}</Heading1>
              <Heading2>{slide.subtitle}</Heading2>
              <Paragraph>{slide.content}</Paragraph>
              <Button onClick={() => handleShop()}>Shop Now</Button>
            </ContentBox>
          </Slide>
        ))}
      </Slider>

      <Arrow left onClick={() => slider.current.slickPrev()}>
        {"<"}
      </Arrow>
      <Arrow onClick={() => slider.current.slickNext()}>{">"}</Arrow>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const Slide = styled.div`
  padding: 150px;
  text-align: center;
  box-sizing: border-box;
  height: 600px;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  color: white;
  justify-items: left;
  background-size: 120% 120%;
  background-repeat: no-repeat;
  background-position: top left;
  @media screen and (max-width: 980px) {
    padding: 100px;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px;
    height: 450px;
  }
  @media screen and (max-width: 640px) {
    height: 400px;
  }
  @media screen and (max-width: 540px) {
    height: 350px;
  }
  @media screen and (max-width: 420px) {
    height: 300px;
  }
`;

const ContentBox = styled.div`
  justify-items: left;
`;

const Heading1 = styled.h3`
  font-size: 30px;
  font-weight: 300;
  @media screen and (max-width: 980px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
  }
`;

const Heading2 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  @media screen and (max-width: 980px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 980px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }
  @media (max-width: 375px){
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 30px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 16px 72px;
  margin-top: 20px;
  background-color: #fff;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: #fff;
  }
  @media screen and (max-width: 980px) {
    padding: 8px 15px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 540px) {
    padding: 8px 15px;
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    padding: 6px 12px;
    font-size: 0.5rem;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 30rem;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  padding: 30px;
  cursor: pointer;
  font-size: 4rem;
  font-weight: 200;
  z-index: 1;

  @media screen and (max-width: 980px) {
    top: 27rem;
  }
  @media screen and (max-width: 768px) {
    top: 22rem;
  }
  @media screen and (max-width: 640px) {
    top: 20rem;
  }
  @media screen and (max-width: 540px) {
    top: 17rem;
  }
  @media screen and (max-width: 420px) {
    top: 15rem;
  }
`;
