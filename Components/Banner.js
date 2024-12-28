"use client";

import styled from "styled-components";

function FasionBetter() {
  return (
    <Container>

      <LeftContainer>
        <HeadH2>WE MADE YOUR EVERYDAY FASHION BETTER!</HeadH2>
        <ParaP>
          In our journey to improve everyday fashion, euphoria presents EVERYDAY
          wear range - Comfortable & Affordable fashion 24/7
        </ParaP>
        <ShopButton>Shop Now</ShopButton>
      </LeftContainer>

      <RightContainer>
        <RightImg src="/images/bg-5.png" />
      </RightContainer>
      
    </Container>
  );
}

const Container = styled.div`
  padding: 1% 7%;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/images/bg-4.png");
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 90.1%;
  height: 600px;
  overflow: hidden;
  color: #fff;
  padding: 0 5%;
  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0;
    height: 450px;
  }
  @media (max-width: 400px) {
    height: 350px;
  }
    @media(max-width: 350px){
    height:300px;
    }
`;
const RightContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 0;
    height: 450px;
  }
  @media (max-width: 400px) {
    height: 350px;
  }
    @media(max-width: 350px){
    height:300px;
    }
`;
const RightImg = styled.img`
  width: 100%;
  height: 600px;
  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    height: 500px;
  }
  @media (max-width: 400px) {
    height: 350px;
  }
    @media(max-width: 350px){
    height:300px;
    }
`;
const HeadH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 1.5rem;
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
`;
const ParaP = styled.p`
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 1.5rem;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
    padding-bottom: 1rem;
  }
`;
const ShopButton = styled.button`
  width: fit-content;
  padding: 2% 8%;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    background-color: rgb(183, 243, 196);
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
  @media (max-width: 400px) {
    font-weight: 600;
    font-size: 0.5rem;
    padding: 2% 4%;
  }
`;

export default FasionBetter;