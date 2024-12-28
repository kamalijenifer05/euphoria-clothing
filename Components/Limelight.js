"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsclicked] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const filteredProducts = response.data.filter((product) =>
          product.category.includes("women's clothing")
        );
        setProducts(filteredProducts.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLikeClick = (productId) => {
    setIsclicked((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MenContainer>
      <ContainerTop>
        <Span></Span>
        <CategoriesHeading>In The Limelight</CategoriesHeading>
      </ContainerTop>

      <ContainerBottom>
        {products.map((product) => (
          <CategoriesTop key={product.id}>
            <LikeButton onClick={() => handleLikeClick(product.id)}>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.49486 2.59679C6.99535 0.849278 4.49481 0.379202 2.61602 1.9794C0.737233 3.5796 0.472726 6.25506 1.94815 8.14762C3.17486 9.72116 6.88733 13.0399 8.10407 14.114C8.2402 14.2342 8.30827 14.2943 8.38766 14.3179C8.45695 14.3385 8.53277 14.3385 8.60207 14.3179C8.68146 14.2943 8.74952 14.2342 8.88565 14.114C10.1024 13.0399 13.8149 9.72116 15.0416 8.14762C16.517 6.25506 16.2848 3.56277 14.3737 1.9794C12.4626 0.396034 9.99438 0.849278 8.49486 2.59679Z"
                  fill={isClicked[product.id] ? "red" : "none"}
                  stroke={isClicked[product.id] ? "red" : "#807D7E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </LikeButton>
            <CategoryImage src={product.image} alt={product.title} />

            <CategoriesBottom>
              <ProductName>
                <Title>{product.title}</Title>
                <Paragraph>Jhanvi’s Brand</Paragraph>
              </ProductName>

              <PriceDiv>
                <PriceButton>$ {product.price}</PriceButton>
              </PriceDiv>
            </CategoriesBottom>
          </CategoriesTop>
        ))}
      </ContainerBottom>
    </MenContainer>
  );
}

const MenContainer = styled.div`
  width: 80%;
  margin: 50px auto;
`;
const ContainerTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;
const Span = styled.span`
  width: 8px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const CategoriesHeading = styled.h2`
   color: #3c4242;
  font-size: 34px;
  font-weight: 700;
  @media (min-width:360px) and (max-width:689px){
    font-size: 20px;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
  gap: 20px;
`;
const CategoriesTop = styled.div`
  width: 300px;
  border-radius: 10px;
`;
const CategoryImage = styled.img`
  width: 270px;
  height: 393.26px;
  gap: 0px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
`;
const LikeButton = styled.div`
  position: relative;
  z-index: 5;
  svg {
    background: #f8f8f8;
    padding: 2% 2%;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 19px;
    height: 20px;
    cursor: pointer;
  }
`;
const CategoriesBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270.36px;
  height: 41.9px;
  margin-top: 40px;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.h5`
  color: #2a2f2f;
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;
const Paragraph = styled.p`
  color: #7f7f7f;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

const PriceDiv = styled.div``;
const PriceButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #3c4242;
  border: none;
  cursor: pointer;
  width: 82.31px;
  height: 36.58px;
  border-radius: 8px;
  &:hover{
    background-color:rgb(243, 188, 212);
  }
`;
