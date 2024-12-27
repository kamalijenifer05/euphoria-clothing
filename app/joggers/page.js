"use client";
import styled from "styled-components";

export default function mady() {
  return (
    <CombosContainer>
      <Message>No Products In This Category </Message>
    </CombosContainer>
  );
}

const CombosContainer = styled.div`
  width: 50%;
  margin: 80px auto;
  text-align: center;
`;
const Message = styled.h1`
  color: #3c4242;
  font-size: 34px;
  font-weight: 600;
  @media (max-width: 669px){
    font-size: 20px;
  }
`;
