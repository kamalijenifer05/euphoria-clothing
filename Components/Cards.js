"use client";
import styled from "styled-components";
import Link from "next/link";

export default function Cards() {
  return (
    <div>
      <CardWrapper>
        <CardSection>
          <CardLeft>
            <Price>Low Price</Price>
            <TextBox>
              <Text>High Coziness</Text>
              <Off>UPTO 50% OFF</Off>
            </TextBox>
            <Explore href="/women">Explore Items</Explore>
          </CardLeft>

          <CardRight>
            <Price>Beyoung Presents</Price>
            <TextBox>
              <Text>Breezy Summer Style</Text>
              <Off>UPTO 50% OFF</Off>
            </TextBox>
            <Explore href="/women">Explore Items</Explore>
          </CardRight>
        </CardSection>
      </CardWrapper>
    </div>
  );
}

const CardWrapper = styled.div`
  width: 90%;
  margin: 50px auto;
  position: relative;
`;
const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  @media screen and (max-width: 785px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const CardLeft = styled.div`
  background-image: url("/images/bg-2.png");
  background-size: 150%;
  width: 40%;
  padding: 70px 20px;
  border-radius: 15px;
  box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 785px) {
    width: 70%;
  }
  @media screen and (max-width: 525px) {
    padding: 40px 20px;
  }
  @media screen and (max-width: 450px) {
    background-size: 150%;
    padding: 30px 20px;
  }
`;

const CardRight = styled.div`
  background-image: url("/images/bg-3.png");
  background-size: 130%;
  width: 44%;
  padding: 70px 20px;
  border-radius: 15px;
  box-shadow: 6px 0 10px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 785px) {
    width: 70%;
  }
  @media screen and (max-width: 525px) {
    background-size: 150%;
    padding: 40px 20px;
  }
  @media screen and (max-width: 450px) {
    background-size: 150%;
    padding: 30px 20px;
  }
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 490px) {
    font-size: 0.8rem;
  }
`;
const TextBox = styled.div``;
const Text = styled.h2`
font-weight: 800;
margin: 0;
  @media screen and (max-width: 490px) {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
const Off = styled.p`
  font-size: 12px;
  font-weight: 400;
  @media screen and (max-width: 490px) {
    font-size: 0.7rem;
  }
`;
const Explore = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid white;
  &:hover {
    color: black;
  }
`;
