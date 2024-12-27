"use client";
import styled from "styled-components";

export default function Brands() {
  return (
    <BrandsContainer>
      <TopBrands>
        <BrandsHeading>Top Brands Deal</BrandsHeading>
        <BrandsParagraph>
          Up To <Span>60%</Span> off on brands
        </BrandsParagraph>
      </TopBrands>

      <BrandImages>
        <PumaImage src="/images/nike.png" alt="image" />
        <PumaImage src="/images/H&M.png" alt="image" />
        <PumaImage src="/images/levis.png" alt="image" />
        <PumaImage src="/images/USPA.png" alt="image" />
        <PumaImage src="/images/puma.png" alt="image" />
      </BrandImages>
    </BrandsContainer>
  );
}

const BrandsContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3c4242;
  border: 1.07px solid #323232;
  border-radius: 12px;
  gap: 50px;
  padding: 30px 0px 80px 0px;
`;
const TopBrands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
`;
const BrandsHeading = styled.h2`
  font-size: 50px;
  font-weight: 800;
  color: white;
  margin: 0;
  @media (min-width: 360px) and (max-width: 850px) {
    font-size: 25px;
  }
`;
const BrandsParagraph = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  @media (max-width: 850px) {
    font-size: 16px;
  }
`;
const Span = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #fbd103;
`;

const BrandImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const PumaImage = styled.img`
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  max-height: 50px;
`;
